import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: { type: String },
        city: { type: String },
        province: { type: String },
        postalCode: { type: String },
        phone: { type: String }
    }
);
const User = mongoose.model('User', userSchema);
export default User;
