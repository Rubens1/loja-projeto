import Image from "next/image"
import imageBanner from "@/public/image-2.jpg";
import Link from "next/link";
export default function Banner() {
    return (
      <>
        <section className="banners">
        <div className="container-site">
            <div className="banners-three">
                <div className="info-banner"><Link href="#" target="_blank" rel="noopener noreferrer"><Image src={imageBanner} alt="banner 1" /></Link></div>
                <div className="info-banner"><Link href="#" target="_blank" rel="noopener noreferrer"><Image src={imageBanner} alt="banner 2" /></Link></div>
                <div className="info-banner"><Link href="#" target="_blank" rel="noopener noreferrer"><Image src={imageBanner} alt="banner 3" /></Link></div>
            </div>
        </div>
    </section>
      </>
    )
  }
  