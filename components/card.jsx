import Image from "next/image"
import { Button } from "./ui/button"

const Card = ({
  imageUrl,
  name,
  description,
  price,
  downloadPdf,
}) => {
  return (
    <>
      <div className="w-full max-w-[300px] overflow-hidden border bg-card shadow-sm">
        <div className="relative aspect-[3/3] w-full bg-muted">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>

        <div className="flex flex-col gap-2 p-4">
          <h2 className="line-clamp-1 text-sm leading-tight font-semibold">
            {name}
          </h2>

          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-muted-foreground uppercase">
                Price
              </span>
              <span className="text-lg font-semibold text-black dark:text-white">
                ₹{price}
              </span>
            </div>
            <Button
              size="sm"
              className="rounded-none px-4 text-sm font-medium"
              onClick={downloadPdf}
            >
              Download Invoice
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
