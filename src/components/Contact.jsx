import { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion"; // Ganti 'motion/react' ke 'framer-motion'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_ud0dufv",      // Ganti dengan Service ID dari EmailJS
                "template_qor642i",     // Ganti dengan Template ID dari EmailJS
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    title: "Ada Pesan Cuyyy😁",
                },
                "kiBQEUDKaWkW5zGEv"        // Ganti dengan Public Key dari EmailJS
            )
            .then(() => {
                alert("Pesan berhasil dikirim!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Gagal mengirim pesan.");
            });
    };

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -80 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center font-bold text-4xl"
            >
                Contact Us
            </motion.h2>

            <div className="container border-b border-neutral-800 pb-24">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.5 }}
                    className="w-full px-4"
                >
                    <div className="mx-auto mb-16 max-w-xl text-center">
                        <motion.h2
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -80 }}
                            transition={{ duration: 1.5 }}
                            className="mb-4 leading-loose text-3xl font-bold text-dark dark:text-white sm:text-4xl lg:text-5xl"
                        >
                            Hubungi Kami
                        </motion.h2>
                        <motion.p
                            whileInView={{ opacity: 1, x: 0, y: 5 }}
                            initial={{ opacity: 0, x: 80 }}
                            transition={{ duration: 1.5 }}
                            className="text-md font-medium text-secondary md:text-lg"
                        >
                            Silakan isi form di bawah untuk menghubungi kami.
                        </motion.p>
                    </div>
                </motion.div>

                <motion.form
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit}
                >
                    <div className="w-full lg:mx-auto lg:max-w-xl lg:w-2/3">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -80 }}
                            transition={{ duration: 1 }}
                            className="mb-8 w-full px-4"
                        >
                            <label htmlFor="name" className="text-base font-bold text-primary">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md bg-slate-200 p-3 text-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 80 }}
                            transition={{ duration: 1 }}
                            className="mb-8 w-full px-4"
                        >
                            <label htmlFor="email" className="text-base font-bold text-primary">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md bg-slate-200 p-3 text-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -80 }}
                            transition={{ duration: 1 }}
                            className="mb-8 w-full px-4"
                        >
                            <label htmlFor="message" className="text-base font-bold text-primary">
                                Pesan
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="h-32 w-full rounded-md bg-slate-200 p-3 text-black focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 80 }}
                            transition={{ duration: 1.5 }}
                            className="w-full px-4"
                        >
                            <button
                                type="submit"
                                className="w-full rounded-full bg-blue-600 py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
                            >
                                Kirim
                            </button>
                        </motion.div>
                    </div>
                </motion.form>
            </div>

            <div className="text-center tracking-tighter mt-10">
                <motion.p
                    whileInView={{ opacity: 1, x: 0, y: 20 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                >
                    {CONTACT.address}
                </motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0, y: 10 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4"
                ><a href="https://wa.me/6289674962244?text=Halo%21%20Saya%20tertarik%20dengan%20jasa%20pembuatan%20website%2C%20UI%2FUX%20design%2C%20atau%20graphic%20design%20dari%20Anda.%20Bisa%20info%20lebih%20lanjut%3F%20%F0%9F%9A%80">
                    {CONTACT.phoneNo}
                </a>
                </motion.p>
                <a href={`mailto:${CONTACT.email}`}>
                    <motion.button
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 80 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl underline text-sky-500"
                    >
                        {CONTACT.email}
                    </motion.button>
                </a>
            </div>
        </div>
    );
};

export default Contact;
