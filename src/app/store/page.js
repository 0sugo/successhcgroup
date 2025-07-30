"use client";
import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const categories = {
  // "Medical Consumables": [
  //   {
  //     name: "Abbott F/Style Lite Glucose Test Strips",
  //     image: "/products/test-strip.png",
  //   },
  //   { name: "Optium Glucose Strips", image: "/products/freestyle.png" },
  //   { name: "Accu-Chek FastClix Kit", image: "/products/accu-chek.png" },
  // ],
  "Aged Care Consumables": [
    {
      name: "Disposable Gloves",
      image: "/products/gloves.jpg",
      category: "Personal Protective Euipment(PPE)",
    },
    {
      name: "Face masks",
      image: "/products/facemask.jpg",
      category: "Personal Protective Euipment(PPE)",
    },
    {
      name: "Face shields",
      image: "/products/faceshield.jpg",
      category: "Personal Protective Euipment(PPE)",
    },
    {
      name: "Disposable gowns",
      image: "/products/disposablegowns.jpg",
      category: "Personal Protective Euipment(PPE)",
    },
    {
      name: "Hair & shoe nets ",
      image: "/products/nets.jpg",
      category: "Personal Protective Euipment(PPE)",
    },
    // Hygiene & Cleaning Supplies
    {
      name: "Hand Sanitiser & Hand wash",
      image: "/products/sanitise.jpg",
      category: "Hygiene & Cleaning Supplies",
    },
    {
      name: "Surface disinfectants & sprays",
      image: "/products/disinfectants.jpg",
      category: "Hygiene & Cleaning Supplies",
    },
    {
      name: "Cleaning wipes",
      image: "/products/wipes.jpg",
      category: "Hygiene & Cleaning Supplies",
    },
    {
      name: "Toilet paper and paper towels",
      image: "/products/tpaper.jpg",
      category: "Hygiene & Cleaning Supplies",
    },
    {
      name: "Laundry detergents and cleaning chemicals ",
      image: "/products/detergents.jpg",
      category: "Hygiene & Cleaning Supplies",
    },
    // Continence Management Products
    {
      name: "Adult incontinece pads and briefs ",
      image: "/products/pads.jpg",
      category: "Continence Management Products",
    },
    {
      name: "Pull-up pants and liners ",
      image: "/products/pantsnliners.jpeg",
      category: "Continence Management Products",
    },
    {
      name: "Bed and chair protectors ",
      image: "/products/bedProtectors.jpeg",
      category: "Continence Management Products",
    },
    {
      name: "Urinary catheters and drainage bags",
      image: "/products/catheters.jpg",
      category: "Continence Management Products",
    },
    {
      name: "Skin barrier creams and wipes",
      image: "/products/cream.jpeg",
      category: "Continence Management Products",
    },
    // Woundcare supplies
    {
      name: "Adhesive bandages and dressing",
      image: "/products/bandages.jpg",
      category: "Wound care supplies",
    },
    {
      name: "Hydrocolloid and foam dressings",
      image: "/products/hydrocolloid.jpg",
      category: "Wound care supplies",
    },
    {
      name: "Gauze swabs and rolls",
      image: "/products/gauze.jpg",
      category: "Wound care supplies",
    },
    {
      name: "Antiseptic creams and wound cleansers",
      image: "/products/clenser.jpg",
      category: "Wound care supplies",
    },
    {
      name: "Tape and fixation products",
      image: "/products/tape.jpeg",
      category: "Wound care supplies",
    },
    // Nutrition & Feeding Consumables
    {
      name: "Oral nutritional supplements",
      image: "/products/oral.jpg",
      category: "Nutrition & Feeding Consumables",
    },
    {
      name: "Thickened fluids and pureed food",
      image: "/products/thickit.jpg",
      category: "Nutrition & Feeding Consumables",
    },
    {
      name: "Enteral feeding tubes and syringes",
      image: "/products/feeding.jpg",
      category: "Nutrition & Feeding Consumables",
    },
    {
      name: "Gravity feeding bags and accessories",
      image: "/products/gravity.jpg",
      category: "Nutrition & Feeding Consumables",
    },
    {
      name: "Disposable feeding utensils and cups",
      image: "/products/feedingCups.jpeg",
      category: "Nutrition & Feeding Consumables",
    },
    // Medical & Diagnostic consumables
    {
      name: "Thermometer probe covers",
      image: "/products/thermometerprobe.jpeg",
      category: "Medical & Diagnostic consumables",
    },
    {
      name: "Blood glucose test strips and lancets",
      image: "/products/test-strips.jpg",
      category: "Medical & Diagnostic consumables",
    },
    {
      name: "Urine test strips",
      image: "/products/urineteststrips.jpg",
      category: "Medical & Diagnostic consumables",
    },
    {
      name: "specimen containers",
      image: "/products/specimencontainers.jpg",
      category: "Medical & Diagnostic consumables",
    },
    {
      name: "syringes and needles",
      image: "/products/syringesandneedles.jpg",
      category: "Medical & Diagnostic consumables",
    },
    // Skin & Personal care
    // {
    //   name: "Moisturising lotions and barrier creams",
    //   image: "/products/otoscope.png",
    //   category: "Skin & Personal care",
    // },
    // {
    //   name: "Shampoo and body wash",
    //   image: "/products/otoscope.png",
    //   category: "Skin & Personal care",
    // },
    // {
    //   name: "Disposable washcloths",
    //   image: "/products/otoscope.png",
    //   category: "Skin & Personal care",
    // },
    // {
    //   name: "Lip balm and oral care swabs",
    //   image: "/products/otoscope.png",
    //   category: "Skin & Personal care",
    // },
  ],
  "First Aid": [
    { name: "Gauze Roll – Cotton Surgical Dressing Bandage", image: "/products/Gauze-Roll.jpg" },
    { name: "Stainless Steel Surgical Blades", image: "/products/Surgical-Blades.jpg" },
    // { name: "First Aid Kit", image: "/products/first-aid-kit.png" },
  ],
  "Diagnostic Treatment": [
    { name: "Oxygen Concentrator", image: "/products/Oxygen-Concentrator.jpg" },
    { name: "Pulse Oximeter", image: "/products/Pulse-Oximeter.png" },
    { name: "ECG Machine", image: "/products/ECG-Machine.png" },
    { name: "Defibrillator", image: "/products/Defibrillator.jpg" },
    { name: "Nebulizer", image: "/products/Nebulizer.jpg" },
  ],
  "Clinic Equipment": [
    { name: "Blood Sugar Meter ", image: "/products/Blood-Sugar-Meter.webp" },
    { name: "Centrifuge ", image: "/products/Centrifuge.png" },
    { name: "Electrolyte analyser ", image: "/products/Electrolyte-Analyzer.png" },
  ],
  
};

const StorePage = () => {
  const [activeCategory, setActiveCategory] = useState("Aged Care Consumables");
  const pdfRef = useRef(null);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleWhatsAppEnquiry = () => {
    const itemList = cart
      .map((item, i) => `${i + 1}. ${item.name}`)
      .join("%0A");
    const message = `Hello,%0AI'd like to enquire about the following items:%0A${itemList}`;
    const url = `https://wa.me/61447096046?text=${message}`;
    window.open(url, "_blank");
  };

  const handleDownloadPDF = async () => {
    const element = pdfRef.current;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${activeCategory}-catalogue.pdf`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Controls */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between gap-4 items-center">
          <h2 className="text-xl font-semibold">{activeCategory}</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              className="input input-bordered w-full max-w-xs"
            />
            <button onClick={handleDownloadPDF} className="btn btn-primary">
              Download Catalogue
            </button>

            <button
              onClick={() => setOpenCart(true)}
              className="btn btn-outline btn-secondary"
            >
              View Cart ({cart.length})
            </button>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div role="tablist" className="tabs tabs-boxed flex flex-wrap">
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                role="tab"
                className={`tab ${
                  activeCategory === cat
                    ? "tab-active bg-[#0055c2] text-white"
                    : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listing */}
      {/* <section className="flex-grow py-8" ref={pdfRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories[activeCategory].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <figure className="bg-gray-100 p-4 h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain"
                  />
                </figure>
                <div className="bg-white rounded-xl p-4 space-y-2 hover:shadow-md transition">
                  <h4 className="text-base font-semibold text-gray-800">
                    {product.name}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {product.category}
                  </span>
                  <button className="mt-2 w-max bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="flex-grow py-8" ref={pdfRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories[activeCategory].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <figure className=" p-4 h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </figure>
                <div className="flex-grow p-4 space-y-2 flex flex-col justify-between">
                  <div className="text-center">
                    <h4 className="text-base font-semibold text-gray-800">
                      {product.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {product.category}
                    </span>
                  </div>
                  <div className="pt-4 mt-auto">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full backdrop-blur-sm bg-[#0055c2]/20 border text-sm px-4 py-2 rounded-md hover:bg-[#0055c2]/10 transition"
                      // className="w-full backdrop-blur-sm bg-white/30 border border-white/40 text-gray-700 text-sm px-4 py-2 rounded-md hover:bg-white/40 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Sheet open={openCart} onOpenChange={setOpenCart}>
        <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            {cart.length === 0 ? (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-2 bg-white shadow-sm"
                >
                  <p className="font-medium text-gray-800 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-6">
              <Button
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleWhatsAppEnquiry}
              >
                Enquire about these items
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default StorePage;
