import { atom } from 'recoil';

export interface ProductsType {
    product_id: number;
    category_id: number;
    product_name: string;
    sub_product_name: string;
    price: number;
    depscription: string;
    keyword: string;
    product_image: string[];
    product_date: string;
}

export const Products = atom({
    key: 'Products',
    default: [
        {
            product_id: 1,
            category_id: 2,
            product_name: 'Patchwork BD Shirt',
            sub_product_name: 'Earth Khadi',
            price: 240,
            depscription:
                'InformationThe Patchwork BD Shirt design was inspired by repair work on vintage garments interpreted in a modern way. This season, we challenged our factory with a more complex blocking approach and are stunned by how well it’s been executed. The fabric itself is a hand-loomed khadi fabric that has a beautifully irregular yarn with a slubby appearance. The weave itself is slightly loose, giving it comfortable breathability and textured hand feel. For this season, we had this khadi fabric custom dyed in 4 different shades and then paneled together. The shirt is finished with genuine mother of pearl buttons. Made in India.',
            keyword: 'shirt',
            product_image: [
                '/images/dummy/shirt1.jpg',
                '/images/dummy/shirt2.jpg',
                '/images/dummy/shirt3.jpg',
                '/images/dummy/shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 2,
            category_id: 2,
            product_name: 'BVFKV KKD - BD Shirt',
            sub_product_name: 'Earth Khadi',
            price: 240,
            depscription:
                'InformationThe Patchwork BD Shirt design was inspired by repair work on vintage garments interpreted in a modern way. This season, we challenged our factory with a more complex blocking approach and are stunned by how well it’s been executed. The fabric itself is a hand-loomed khadi fabric that has a beautifully irregular yarn with a slubby appearance. The weave itself is slightly loose, giving it comfortable breathability and textured hand feel. For this season, we had this khadi fabric custom dyed in 4 different shades and then paneled together. The shirt is finished with genuine mother of pearl buttons. Made in India.',
            keyword: 'shirt',
            product_image: [
                '/images/dummy/shirt1.jpg',
                '/images/dummy/shirt2.jpg',
                '/images/dummy/shirt3.jpg',
                '/images/dummy/shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 3,
            category_id: 2,
            product_name: 'PCAO NGI - BD Shirt',
            sub_product_name: 'Earth Khadi',
            price: 240,
            depscription:
                'InformationThe Patchwork BD Shirt design was inspired by repair work on vintage garments interpreted in a modern way. This season, we challenged our factory with a more complex blocking approach and are stunned by how well it’s been executed. The fabric itself is a hand-loomed khadi fabric that has a beautifully irregular yarn with a slubby appearance. The weave itself is slightly loose, giving it comfortable breathability and textured hand feel. For this season, we had this khadi fabric custom dyed in 4 different shades and then paneled together. The shirt is finished with genuine mother of pearl buttons. Made in India.',
            keyword: 'shirt',
            product_image: [
                '/images/dummy/shirt1.jpg',
                '/images/dummy/shirt2.jpg',
                '/images/dummy/shirt3.jpg',
                '/images/dummy/shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 4,
            category_id: 2,
            product_name: 'TODOVBL BD Shirt',
            sub_product_name: 'Earth Khadi',
            price: 240,
            depscription:
                'InformationThe Patchwork BD Shirt design was inspired by repair work on vintage garments interpreted in a modern way. This season, we challenged our factory with a more complex blocking approach and are stunned by how well it’s been executed. The fabric itself is a hand-loomed khadi fabric that has a beautifully irregular yarn with a slubby appearance. The weave itself is slightly loose, giving it comfortable breathability and textured hand feel. For this season, we had this khadi fabric custom dyed in 4 different shades and then paneled together. The shirt is finished with genuine mother of pearl buttons. Made in India.',
            keyword: 'shirt',
            product_image: [
                '/images/dummy/shirt1.jpg',
                '/images/dummy/shirt2.jpg',
                '/images/dummy/shirt3.jpg',
                '/images/dummy/shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 5,
            category_id: 2,
            product_name: 'DD-Shirt',
            sub_product_name: 'Earth Khadi',
            price: 240,
            depscription:
                'InformationThe Patchwork BD Shirt design was inspired by repair work on vintage garments interpreted in a modern way. This season, we challenged our factory with a more complex blocking approach and are stunned by how well it’s been executed. The fabric itself is a hand-loomed khadi fabric that has a beautifully irregular yarn with a slubby appearance. The weave itself is slightly loose, giving it comfortable breathability and textured hand feel. For this season, we had this khadi fabric custom dyed in 4 different shades and then paneled together. The shirt is finished with genuine mother of pearl buttons. Made in India.',
            keyword: 'shirt',
            product_image: [
                '/images/dummy/shirt1.jpg',
                '/images/dummy/shirt2.jpg',
                '/images/dummy/shirt3.jpg',
                '/images/dummy/shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 6,
            category_id: 2,
            product_name: 'Pk BD Shirt',
            sub_product_name: 'Earth Khadi',
            price: 240,
            depscription:
                'InformationThe Patchwork BD Shirt design was inspired by repair work on vintage garments interpreted in a modern way. This season, we challenged our factory with a more complex blocking approach and are stunned by how well it’s been executed. The fabric itself is a hand-loomed khadi fabric that has a beautifully irregular yarn with a slubby appearance. The weave itself is slightly loose, giving it comfortable breathability and textured hand feel. For this season, we had this khadi fabric custom dyed in 4 different shades and then paneled together. The shirt is finished with genuine mother of pearl buttons. Made in India.',
            keyword: 'shirt',
            product_image: [
                '/images/dummy/shirt1.jpg',
                '/images/dummy/shirt2.jpg',
                '/images/dummy/shirt3.jpg',
                '/images/dummy/shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 7,
            category_id: 1,
            product_name: 'CS⁠-⁠120xk',
            sub_product_name: 'Classic Straight ⁠-⁠ Rinsed Shadow Kibata',
            price: 230,
            depscription:
                'The CS-120xk jean features a beautiful loomstate raw shadow selvedge denim which is custom woven exclusively for 3sixteen by Kuroki Mills. This denim has been woven at low tension to give it a rough, abrasive hand that will yield beautiful aging results over time. The denim utilizes indigo warp yarns and black weft yarns for a deep navy color that yields high contrast fades. We then give the jean a rinse to eliminate shrinkage and bring out the texture and character of the fabric even further.  Trims include gunmetal YKK punch-through rivets and shanks, and a natural tan roughout leather patch. Made in USA.',
            keyword: 'bottom',
            product_image: [
                '/images/dummy/bottom1.jpg',
                '/images/dummy/bottom2.jpg',
                '/images/dummy/bottom3.jpg',
                '/images/dummy/bottom4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 8,
            category_id: 1,
            product_name: 'SCV-130',
            sub_product_name: 'Classic Straight ⁠-⁠ Rinsed Shadow Kibata',
            price: 230,
            depscription:
                'The CS-120xk jean features a beautiful loomstate raw shadow selvedge denim which is custom woven exclusively for 3sixteen by Kuroki Mills. This denim has been woven at low tension to give it a rough, abrasive hand that will yield beautiful aging results over time. The denim utilizes indigo warp yarns and black weft yarns for a deep navy color that yields high contrast fades. We then give the jean a rinse to eliminate shrinkage and bring out the texture and character of the fabric even further.  Trims include gunmetal YKK punch-through rivets and shanks, and a natural tan roughout leather patch. Made in USA.',
            keyword: 'bottom',
            product_image: [
                '/images/dummy/bottom1.jpg',
                '/images/dummy/bottom2.jpg',
                '/images/dummy/bottom3.jpg',
                '/images/dummy/bottom4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 9,
            category_id: 1,
            product_name: 'MADIN-20',
            sub_product_name: 'Classic Straight ⁠-⁠ Rinsed Shadow Kibata',
            price: 230,
            depscription:
                'The CS-120xk jean features a beautiful loomstate raw shadow selvedge denim which is custom woven exclusively for 3sixteen by Kuroki Mills. This denim has been woven at low tension to give it a rough, abrasive hand that will yield beautiful aging results over time. The denim utilizes indigo warp yarns and black weft yarns for a deep navy color that yields high contrast fades. We then give the jean a rinse to eliminate shrinkage and bring out the texture and character of the fabric even further.  Trims include gunmetal YKK punch-through rivets and shanks, and a natural tan roughout leather patch. Made in USA.',
            keyword: 'bottom',
            product_image: [
                '/images/dummy/bottom1.jpg',
                '/images/dummy/bottom2.jpg',
                '/images/dummy/bottom3.jpg',
                '/images/dummy/bottom4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 10,
            category_id: 1,
            product_name: 'MADIN-CK2020',
            sub_product_name: 'Classic Straight ⁠-⁠ Rinsed Shadow Kibata',
            price: 230,
            depscription:
                'The CS-120xk jean features a beautiful loomstate raw shadow selvedge denim which is custom woven exclusively for 3sixteen by Kuroki Mills. This denim has been woven at low tension to give it a rough, abrasive hand that will yield beautiful aging results over time. The denim utilizes indigo warp yarns and black weft yarns for a deep navy color that yields high contrast fades. We then give the jean a rinse to eliminate shrinkage and bring out the texture and character of the fabric even further.  Trims include gunmetal YKK punch-through rivets and shanks, and a natural tan roughout leather patch. Made in USA.',
            keyword: 'bottom',
            product_image: [
                '/images/dummy/bottom1.jpg',
                '/images/dummy/bottom2.jpg',
                '/images/dummy/bottom3.jpg',
                '/images/dummy/bottom4.jpg',
            ],
            product_date: '2021-10-24',
        },
    ],
});
