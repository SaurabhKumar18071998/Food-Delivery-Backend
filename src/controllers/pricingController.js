// controllers/pricingController.js

const Pricing = require('../models/Pricing');

exports.calculatePrice = async (req, res, next) => {
  try {
    const { organization_id, total_distance, item_type, zone } = req.body; // Include zone in the request payload

    console.log('Request Body:', req.body); // Log request body for debugging

    // Fetch pricing data from the database based on organization_id and zone
    const pricing = await Pricing.findOne({ where: { organization_id, zone } });

    console.log('SQL Query:', pricing); // Log SQL query for debugging

    if (pricing === null || pricing === undefined) {
      return res.status(404).json({ error: 'Pricing not found for the given organization, item type, and zone' });
    }

    // Calculate total price based on the pricing data and total distance
    const total_price = calculateTotalPrice(pricing, total_distance);

    res.json({ total_price });
  } catch (err) {
    next(err);
  }
};

function calculateTotalPrice(pricing, total_distance) {
  const baseDistance = pricing.base_distance_in_km;
  const basePrice = pricing.fix_price * 100; // Convert to cents
  const perKmPrice = pricing.km_price * 100; // Convert to cents
  const additionalDistance = Math.max(total_distance - baseDistance, 0);
  const additionalCost = additionalDistance * perKmPrice;
  return (basePrice + additionalCost) / 100; // Convert back to euros
}
