import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            meal: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Meal',
                required: true,
            },
        },
    ],
    shippingAddress: {
        fullName: { type: String },
        address: { type: String },
        city: { type: String },
        province: { type: String },
        postalCode: { type: String },
        phone: { type: String },
    },
    creditCardInfo: {
        holderName: { type: String },
        cardNumber: { type: String },
        expiryDate: { type: String },
        securityCode: { type: String }
    },
    paymentMethod: { type: String, required: true },
    deliveryMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true,
}
);

const Order = mongoose.model('Order', orderSchema);
export default Order;