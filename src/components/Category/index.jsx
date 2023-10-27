
import image2 from '@/public/image-2.jpg';
import Image from 'next/image';
import Link from 'next/link';
export default function Category() {
    const categoria = [
        { id: 1, imagem: image2, nome: "Categoria 1", slug: "categoria-1" },
        { id: 2, imagem: image2, nome: "Categoria 2", slug: "categoria-2" },
        { id: 3, imagem: image2, nome: "Categoria 3", slug: "categoria-3" },
        { id: 4, imagem: image2, nome: "Categoria 4", slug: "categoria-4" },
        { id: 5, imagem: image2, nome: "Categoria 5", slug: "categoria-5" }

    ];
    return (
        <>
            <section className="category">
                <div className="container-site">
                    <div className="category-container-site">
                        {categoria.map((item, key) => {
                            return (
                                <Link href={`/categoria/${item.slug}`} key={item.id} alt={item.nome} >
                                    <div className="category-info">
                                        <div className="img-category">
                                            <Image src={item.imagem} alt={item.nome} />
                                        </div>
                                        <div className="title-category">
                                            {item.nome}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
