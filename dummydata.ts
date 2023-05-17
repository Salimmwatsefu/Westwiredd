export interface Product {
    id: number
    title: string
    price: number
    image: string
    quantity?: number
   }


export const products: Product[] = [
    {
      id: 1,
      title: "Bose QuietComfort® 45 ",
      image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45-LE_Left-Angle_1200x1022_Midnight-Blue_RGB.png/_jcr_content/renditions/cq5dam.web.320.320.png",
      price: 270.00
    },
    {
      id: 2,
      title: "Bose QuietComfort® 45 ",
      image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc45/product_silo_images/QC45-LE_Left-Angle_1200x1022_Midnight-Blue_RGB.png/_jcr_content/renditions/cq5dam.web.320.320.png",
      price: 270.00
    },
    {
      id: 3,
      title: "Samsung Galaxy Buds",
      image: "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_image/COM-3679_QCEBII-LE_Buds_Front_EclipseGrey_hero.png/_jcr_content/renditions/cq5dam.web.320.320.png",
      price: 390.00
    },
    {
      id: 4,
      title: "Airpods Pro Max 2",
      image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhbXN1bmd8ZW58MHx8MHx8&auto=format&fit=crop&w=1920&q=100",
      price: 250.00
    },
  ];
  