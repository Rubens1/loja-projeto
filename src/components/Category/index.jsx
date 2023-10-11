
import image2 from '@/public/image-2.jpg';
import Image from 'next/image';
import Link from 'next/link';
export default function Category() {
    return (
      <>
            <section className="category">
        <div className="container-site">
            <div className="category-container-site">
                <Link href="" alt="CAtegoria">
                    <div className="category-info">
                        <div className="img-category">
                            <Image src={image2} alt="Cardpress" />
                        </div>
                        <div className="title-category">
                            Loja
                        </div>
                    </div>
                </Link>
                <Link href="" alt="CAtegoria">
                <div className="category-info">
                    <div className="img-category">
                        <Image src={image2} alt="Cardpress" />
                    </div>
                    <div className="title-category">
                        Loja
                    </div>
                </div>
                </Link>
                <Link href="" alt="CAtegoria">
                <div className="category-info">
                    <div className="img-category">
                        <Image src={image2} alt="Cardpress" />
                    </div>
                    <div className="title-category">
                        Loja
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </section>
      </>
    )
  }
  