"use client"

import Card from "@/components/card"
import { shoeListType } from "@/types/shoe-types"
import ShoeInvoicePDF from "../(pdf-render)/invoice"
import { pdf } from "@react-pdf/renderer"

export const shoeList: shoeListType[] = [
  {
    imageUrl: "/commet-1.jpg",
    name: "Comet Velocity X",
    description:
      "Lightweight running shoes designed for speed and daily training with breathable mesh support.",
    price: 3499,
  },
  {
    imageUrl: "/commet-2.jpg",
    name: "Comet Urban Flex",
    description:
      "Casual sneakers built for everyday wear, offering flexibility and all-day comfort.",
    price: 2799,
  },
  {
    imageUrl: "/commet-3.jpg",
    name: "Comet Trail Pro",
    description:
      "Durable trail shoes with enhanced grip and cushioning for rough terrains.",
    price: 4599,
  },
]

const Inventory = () => {
  const downloadPDF = async (shoeItem: shoeListType) => {
    try {
      const blob = await pdf(
        <ShoeInvoicePDF items={[shoeItem]} />
      ).toBlob()

      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")

      link.href = url
      link.download = `${shoeItem.name}-invoice.pdf`

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("PDF generation failed:", error)
    }
  }

  return (
    <div className="mt-16 flex flex-col items-center gap-7 md:mt-28 md:flex-row md:justify-start">
      {shoeList.map((shoe, index) => (
        <Card
          key={index}
          imageUrl={shoe.imageUrl}
          name={shoe.name}
          description={shoe.description}
          price={shoe.price}
          downloadPdf={() => downloadPDF(shoe)}
        />
      ))}
    </div>
  )
}

export default Inventory