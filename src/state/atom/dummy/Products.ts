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
                './images/dummy/Patchwork_BD_Shirt1.jpg',
                './images/dummy/Patchwork_BD_Shirt2.jpg',
                './images/dummy/Patchwork_BD_Shirt3.jpg',
                './images/dummy/Patchwork_BD_Shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 2,
            category_id: 2,
            product_name: 'Crosscut Flannel',
            sub_product_name: 'Mocha',
            price: 230,
            depscription:
                'This seasons fabric is a variation on a returning favorite. We first released this particular pattern in FW15 and redeveloped it for our 15 year anniversary. It features a heavily brushed underside with chunky yarns and a distinct texture; it’s soft but substantial. We opted to run the fabric in two seasonal colors that line up with the rest of our FW21 palette: Mocha and Dijon. The subdued, slightly washed-out hue of each color interplays nicely with the black and vintage cream contrasts in the weave. The fabric is woven using coarse, thick yarns and then brushed on the underside for comfort. After it’s been sewn, each shirt is then washed to remove shrinkage and soften the fabric further. The result is an exceedingly comfortable flannel that’s built like a tank. Made in India.',
            keyword: 'shirt',
            product_image: [
                './images/dummy/Crosscut_Flannel1.jpg',
                './images/dummy/Crosscut_Flannel2.jpg',
                './images/dummy/Crosscut_Flannel3.jpg',
                './images/dummy/Crosscut_Flannel4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 3,
            category_id: 2,
            product_name: 'Camp Shirt',
            sub_product_name: 'Wool Tweed/HBT',
            price: 240,
            depscription:
                'The slightly roomy fit paired with the split hem offers easy, comfortable wear year-round. When searching for wools this season, we found a supplier in Japan that offered two different weaves using the same wool fibers. The hand feel and weight are exactly the same but the different weave creates a subtle but unique effect when paired together. The fabric is warm but not too warm, perfect for a cold west coast day or as a layer in east coast winters. Made in India.',
            keyword: 'shirt',
            product_image: [
                './images/dummy/Camp_Shirt1.jpg',
                './images/dummy/Camp_Shirt2.jpg',
                './images/dummy/Camp_Shirt3.jpg',
                './images/dummy/Camp_Shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 4,
            category_id: 2,
            product_name: 'CPO Shirt',
            sub_product_name: 'OD Arp Camo',
            price: 240,
            depscription:
                "This season's Arp Camo fabric is our best representation of traditional Indian handcraft yet. For the base fabric, we sourced a beautiful khadi cotton canvas with a tight, uniform weave that has a hint of the quintessential irregularity. Khadi is a hand loomed fabric central to India’s heritage. It uses stubby hand spun yarns that are then hand loomed into a beautifully irregular fabric.The fabric is then printed with a bold camoflauge that we designed based on the artwork of Hans Jean Arp. Each shape in the camo is reminiscent of a piece of Arp’s work, whether it be a collage, sculpture, or painting. Individual wood blocks are hand carved for each color and then carefully stamped, which gives the dynamic, slightly off-register print. The shirt is finished with replica BDU buttons. Made in India.",
            keyword: 'shirt',
            product_image: [
                './images/dummy/CPO_Shirt1.jpg',
                './images/dummy/CPO_Shirt2.jpg',
                './images/dummy/CPO_Shirt3.jpg',
                './images/dummy/CPO_Shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 5,
            category_id: 2,
            product_name: 'Leisure Shirt',
            sub_product_name: 'Sand Floral',
            price: 165,
            depscription:
                'For SS21, we dug through our Indian manufacturer’s archive of prints and discovered a floral print that felt distinctly psychedelic, yet still modern. The print is hand screen printed on a beautiful cotton poplin with a tight, uniform weave that has a hint of the quintessential irregularity of other Indian fabrics. The shirt is finished with coconut shell buttons that have a beautiful texture and color. Made in India.',
            keyword: 'shirt',
            product_image: [
                './images/dummy/Leisure_Shirt1.jpg',
                './images/dummy/Leisure_Shirt2.jpg',
                './images/dummy/Leisure_Shirt3.jpg',
                './images/dummy/Leisure_Shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 6,
            category_id: 2,
            product_name: 'Baseball Shirt',
            sub_product_name: 'Smoke',
            price: 185,
            depscription:
                'For SS21, we wanted to produce a contemporary take on the classic so we opted for a Tencel/Cotton/Linen fabric. This fabric paired with the raglan sleeves creates a breathable, comfortable shirt perfect for the warm weather. The shirt is finished with custom 2-hole buttons, similar to what you’d find on vintage baseball jerseys, made in a hefty corozo. Made in India.',
            keyword: 'shirt',
            product_image: [
                './images/dummy/Baseball_Shirt1.jpg',
                './images/dummy/Baseball_Shirt2.jpg',
                './images/dummy/Baseball_Shirt3.jpg',
                './images/dummy/Baseball_Shirt4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 7,
            category_id: 1,
            product_name: 'Drawstring Pant',
            sub_product_name: 'Wool Tweed/HBT',
            price: 240,
            depscription:
                'The Drawstring Pant features an elastic and drawstring waistband and single front pleats. The fit is inspired by our CT cut- roomy top block with a tapered leg- and is cut with a short inseam and longer rise. The pant is finished with reinforced rear patch pockets for added durability. When searching for wools this season, we found a supplier in Japan that offered two different weaves using the same wool fibers. The hand feel and weight are exactly the same but the different weave creates a subtle but unique effect when paired together. The fabric is warm but not too warm. Made in India.',
            keyword: 'bottom',
            product_image: [
                './images/dummy/Drawstring_Pant1.jpg',
                './images/dummy/Drawstring_Pant2.jpg',
                './images/dummy/Drawstring_Pant3.jpg',
                './images/dummy/Drawstring_Pant4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 8,
            category_id: 1,
            product_name: 'NT-120xk',
            sub_product_name: 'Narrow Tapered - Rinsed Shadow Kibata',
            price: 230,
            depscription:
                'This denim has been woven at low tension to give it a rough, abrasive hand that will yield beautiful aging results over time. The denim utilizes indigo wrap yarns and black weft yarns for a deep navy color that yields high contrast fades. We then give the jean a rinse to eliminate shrinkage and bring out the texture and character of the fabric even further.  Trims include gunmetal YKK punch-through rivets and shanks, and a natural tan roughout leather patch. Made in USA.',
            keyword: 'bottom',
            product_image: [
                './images/dummy/NT-120xk1.jpg',
                './images/dummy/NT-120xk1.jpg',
                './images/dummy/NT-120xk1.jpg',
                './images/dummy/NT-120xk1.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 9,
            category_id: 1,
            product_name: 'Fatigue Pant',
            sub_product_name: 'Coyote',
            price: 265,
            depscription:
                'This pant silhouette is the roomiest of all our bottoms and features a straight leg, higher rise, and roomy top block. This season, we sourced a heavyweight HBT fabric from Japan that has a lot of heft to it. Off the loom, this fabric is very crunchy and starchy so we worked with the mill to develop a rinse on the fabric that softened the hand considerably.  Made in USA.',
            keyword: 'bottom',
            product_image: [
                './images/dummy/Fatigue_Pant1.jpg',
                './images/dummy/Fatigue_Pant2.jpg',
                './images/dummy/Fatigue_Pant3.jpg',
                './images/dummy/Fatigue_Pant4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 10,
            category_id: 1,
            product_name: 'CT-101 xs',
            sub_product_name: 'Classic Tapered - Stonewashed Indigo Selvedge',
            price: 245,
            depscription:
                "The CT-101xs jean features a 12oz. selvedge denim that is stonewashed for an evenly faded look. The stonewash gives the jean a soft, broken-in hand that's perfect for year-round wear. Made in USA.",
            keyword: 'bottom',
            product_image: [
                './images/dummy/CT-101_xs1.jpg',
                './images/dummy/CT-101_xs2.jpg',
                './images/dummy/CT-101_xs3.jpg',
                './images/dummy/CT-101_xs4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 11,
            category_id: 1,
            product_name: 'Fatigue Shorts',
            sub_product_name: 'Giraffe Print',
            price: 165,
            depscription:
                "They feature baker front pockets and gusseted back pockets.We’ve added a drawstring to the waist for easy sizing and comfort. For SS21, we chose a mid-weight cotton twill that is printed with a bold giraffe pattern that's been trialed by at least one EU military force in the past but never officially employed; we thought that it'd make for a fun match to our Fatigue Shorts. Pair them with the Giraffe BDU for maximum effect. Made in USA.",
            keyword: 'bottom',
            product_image: [
                './images/dummy/Fatigue_Shorts1.jpg',
                './images/dummy/Fatigue_Shorts2.jpg',
                './images/dummy/Fatigue_Shorts3.jpg',
                './images/dummy/Fatigue_Shorts4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 12,
            category_id: 1,
            product_name: 'Cinch Fatigue Pant',
            sub_product_name: 'Indigo/Indigo 5x5 Denim',
            price: 265,
            depscription:
                'This pant silhouette is the roomiest of all our bottoms and features a straight leg, higher rise, and roomy top block. The Cinch Fatigue includes elastic drawstrings at the cuffs that allow the wearer to tighten them up at the bottom; they can also be left loose to fit over boots or other bulkier footwear.',
            keyword: 'bottom',
            product_image: [
                './images/dummy/Cinch_Fatigue_Pant1.jpg',
                './images/dummy/Cinch_Fatigue_Pant2.jpg',
                './images/dummy/Cinch_Fatigue_Pant3.jpg',
                './images/dummy/Cinch_Fatigue_Pant4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 13,
            category_id: 3,
            product_name: 'Wool Mac Coat',
            sub_product_name: 'Black Check',
            price: 400,
            depscription:
                'The fabric is warm, soft and a perfect weight to wear throughout the Fall and Winter months. The coat is finished with raglan sleeves, a single rear vent, and interior pockets. Made in India.',
            keyword: 'outerwear',
            product_image: [
                './images/dummy/Wool_Mac_Coat1.jpg',
                './images/dummy/Wool_Mac_Coat2.jpg',
                './images/dummy/Wool_Mac_Coat3.jpg',
                './images/dummy/Wool_Mac_Coat4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 14,
            category_id: 3,
            product_name: 'Mechanic Jacket',
            sub_product_name: 'Tan Wool Boxweave',
            price: 330,
            depscription:
                "Instead of the tough workwear fabric you'd find on a vintage example, we opted to create a luxe version using custom-woven black plaid twill fabric for the body with a crisp cotton lining. The jacket is finished with a gunmetal YKK 2-way zipper, antiqued pewter buttons for the front pocket flaps, and hidden inner pockets.  Made in India.",
            keyword: 'outerwear',
            product_image: [
                './images/dummy/Mechanic_Jacket1.jpg',
                './images/dummy/Mechanic_Jacket2.jpg',
                './images/dummy/Mechanic_Jacket3.jpg',
                './images/dummy/Mechanic_Jacket4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 15,
            category_id: 3,
            product_name: 'Stadium Jacket',
            sub_product_name: 'Field Tan Waxed Canvas',
            price: 330,
            depscription:
                'The jacket is lined with a black quilted Thermolite jersey and is finished with heavyweight varsity jacket ribbing and a gunmetal YKK double zip. Made in USA.',
            keyword: 'outerwear',
            product_image: [
                './images/dummy/Stadium_Jacket1.jpg',
                './images/dummy/Stadium_Jacket2.jpg',
                './images/dummy/Stadium_Jacket3.jpg',
                './images/dummy/Stadium_Jacket4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 16,
            category_id: 3,
            product_name: 'Type 3s Denim Jacket',
            sub_product_name: 'Washed 222x',
            price: 285,
            depscription:
                'The fabric is a 12oz raw black selvedge denim that is woven exclusively for us by Kuroki Mills in Okayama, Japan. We work with a local wash house in Los Angeles, CA to put the jacket through a multi-stage stonewash process to bring the character of the fabric out. Made in USA.',
            keyword: 'outerwear',
            product_image: [
                './images/dummy/Type_3s_Denim_Jacket1.jpg',
                './images/dummy/Type_3s_Denim_Jacket2.jpg',
                './images/dummy/Type_3s_Denim_Jacket3.jpg',
                './images/dummy/Type_3s_Denim_Jacket4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 17,
            category_id: 3,
            product_name: 'Mac Coat',
            sub_product_name: 'Black',
            price: 350,
            depscription:
                'Extra long staple (ELS) cotton fibers are woven incredibly densely- that’s it. The ELS fibers are difficult to come by- only 2% of the worlds cotton can provide fibers that meet this standard. When the fabric gets wet, these yarns expand and create an almost impenetrable barrier against the water. The resulting fabric has the hand feel, drape, and breathability of cotton with the technical properties of a synthetic fabric. The Mac Coat is finished with floral print half liner, button cuffs, single rear vent, and interior pockets. Made in India.',
            keyword: 'outerwear',
            product_image: [
                './images/dummy/Mac_Coat1.jpg',
                './images/dummy/Mac_Coat2.jpg',
                './images/dummy/Mac_Coat3.jpg',
                './images/dummy/Mac_Coat4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 18,
            category_id: 3,
            product_name: 'PonCho - Sand',
            sub_product_name: 'Indigo/Indigo 5x5 Denim',
            price: 265,
            depscription:
                'It utilizes a water repellant cotton fabric woven with extra-long staple yarns and no DWR coating. When the fabric gets wet, these yarns expand and create an almost impenetrable barrier against the water; the resulting fabric has the hand feel, drape, and breathability of cotton with the technical properties of a synthetic fabric. Lightweight snaps are employed on the throat closure and under the arms to adjust the fit and keep the elements out. The front features a dual functioning patch pocket that’s a kangaroo hand pocket and top entry storage pocket with hidden snap closure. Made in India.',
            keyword: 'outerwear',
            product_image: [
                './images/dummy/PonCho_Sand1.jpg',
                './images/dummy/PonCho_Sand2.jpg',
                './images/dummy/PonCho_Sand3.jpg',
                './images/dummy/PonCho_Sand4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 19,
            category_id: 4,
            product_name: 'Cap Toe Service Boot',
            sub_product_name: 'Mocha Vintage',
            price: 720,
            depscription:
                "Viberg is a third generation family-owned bootmaker from Victoria, Canada that's been making footwear for over 80 years. Our Cap Toe Service Boot features a medium brown Horween vegetable-tanned leather that is treated with the same proprietary tanning blend that is used on their shell cordovan.",
            keyword: 'footwear',
            product_image: [
                './images/dummy/Cap_Toe_Service_Boot1.jpg',
                './images/dummy/Cap_Toe_Service_Boot2.jpg',
                './images/dummy/Cap_Toe_Service_Boot3.jpg',
                './images/dummy/Cap_Toe_Service_Boot4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 20,
            category_id: 4,
            product_name: 'Scout Boot',
            sub_product_name: 'Bamboo Calf Suede',
            price: 700,
            depscription:
                " This Scout Boot features an exceptionally soft British suede paired with a Vibram Morflex sole that is both lightweight and easy to break in. The boot features goodyear welt construction with a storm welt for a cleaner look. What we've ended up with is a rugged silhouette with unexpected, refined details.",
            keyword: 'footwear',
            product_image: [
                './images/dummy/Scout_Boot1.jpg',
                './images/dummy/Scout_Boot2.jpg',
                './images/dummy/Scout_Boot3.jpg',
                './images/dummy/Scout_Boot4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 21,
            category_id: 4,
            product_name: 'Slipper',
            sub_product_name: 'Mole Calf Suede',
            price: 520,
            depscription:
                'This slipper comes in a Mole calf suede from CF Stead built on the 2010 last. The suede is soft and supple, making for a comfortable year-round shoe. The unstructured heel counter allows the heel to fold down mule-style, and the toe is also unstructured allowing it to break in and collapse over time for a lived-in, relaxed look. The slipper features a natural leather sole and dovetailed heel for easy resoling. Made in Canada.',
            keyword: 'footwear',
            product_image: [
                './images/dummy/Slipper1.jpg',
                './images/dummy/Slipper2.jpg',
                './images/dummy/Slipper3.jpg',
                './images/dummy/Slipper4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 22,
            category_id: 4,
            product_name: 'Kudu Service Boot',
            sub_product_name: 'Peanut',
            price: 680,
            depscription:
                ' This newest makeup for SS20 utilizes a Vibram Morflex sole combined with a beautiful Peanut Kudu suede from CF Stead tannery. The Goodyear welt coupled with the super-light Vibram sole makes this a light, easy to wear boot requiring little break-in. Made in Canada',
            keyword: 'footwear',
            product_image: [
                './images/dummy/Kudu_Service_Boot1.jpg',
                './images/dummy/Kudu_Service_Boot2.jpg',
                './images/dummy/Kudu_Service_Boot3.jpg',
                './images/dummy/Kudu_Service_Boot4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 23,
            category_id: 4,
            product_name: 'Chelsea Boot',
            sub_product_name: 'Waxed Flesh',
            price: 700,
            depscription:
                "Viberg is a third generation family-owned bootmaker from Victoria, Canada that's been making footwear for over 80 years. Our Chelsea Boot is a custom makeup exclusively for 3sixteen and features a Waxed Flesh leather. Made in Canada.",
            keyword: 'footwear',
            product_image: [
                './images/dummy/Chelsea_Boot1.jpg',
                './images/dummy/Chelsea_Boot2.jpg',
                './images/dummy/Chelsea_Boot3.jpg',
                './images/dummy/Chelsea_Boot4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 24,
            category_id: 4,
            product_name: '15y Side Zip Service Boot',
            sub_product_name: 'Petrol Chamois',
            price: 720,
            depscription:
                'The leather is heavily oiled, giving it a great texture that functions well in the rain. The boot is finished with stitchdown construction with a beautiful natural leather split welt for a clean look. Made in Canada.',
            keyword: 'footwear',
            product_image: [
                './images/dummy/15y_Side_Zip_Service_Boot1.jpg',
                './images/dummy/15y_Side_Zip_Service_Boot2.jpg',
                './images/dummy/15y_Side_Zip_Service_Boot3.jpg',
                './images/dummy/15y_Side_Zip_Service_Boot4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 25,
            category_id: 5,
            product_name: 'WatchCap',
            sub_product_name: 'Indigo',
            price: 65,
            depscription:
                'They are knit in Peru and feature a half-cardigan rib pattern with plenty of stretch and recovery. We designed the cap length to be versatile enough to accommodate a single fold or double cuff depending on how shallow the wearer desires. These watch caps feature yarns dyed with natural indigo that is sure to fade beautifully over time as the cap is worn and washed. Made in Peru.',
            keyword: 'accessories',
            product_image: [
                './images/dummy/Watch_Cap1.jpg',
                './images/dummy/Watch_Cap2.jpg',
                './images/dummy/Watch_Cap3.jpg',
                './images/dummy/Watch_Cap4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 26,
            category_id: 5,
            product_name: 'Pinwheel Logo Cap',
            sub_product_name: 'Coyote',
            price: 50,
            depscription:
                'One size fits most via a self-fabric strap closure. Made in USA.',
            keyword: 'accessories',
            product_image: [
                './images/dummy/Pinwheel_Logo_Cap1.jpg',
                './images/dummy/Pinwheel_Logo_Cap2.jpg',
                './images/dummy/Pinwheel_Logo_Cap3.jpg',
                './images/dummy/Pinwheel_Logo_Cap4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 27,
            category_id: 5,
            product_name: 'Cuban Link Necklace',
            sub_product_name: '18k White Gold Plated',
            price: 1380,
            depscription:
                "It features a faceted curb chain link that was hand-formed and then meticulously filed down in Good Art's Los Angeles-based foundry. The clasp, where Good Art pieces always tend to shine, is designed to look like a traditional box and tongue closure - down to the mock safeties on either side - but functions completely differently with two springs and hinges that press down to lock in or release the clasp. Entirely over-the-top functionality, just as you'd expect from Good Art. The entire necklace is locally plated with 18k white gold to match the Canal Street chains that inspired this project. Each necklace ships in a leather pouch. For more photos and information on this project, please read our interview with Good Art's founder, Josh Warner here. Made in Los Angeles.",
            keyword: 'accessories',
            product_image: [
                './images/dummy/Cuban_Link_Necklace1.jpg',
                './images/dummy/Cuban_Link_Necklace2.jpg',
                './images/dummy/Cuban_Link_Necklace3.jpg',
                './images/dummy/Cuban_Link_Necklace4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 28,
            category_id: 5,
            product_name: 'Cuban Link Bracelet',
            sub_product_name: '18k White Gold Plated',
            price: 1220,
            depscription:
                "It features a faceted curb chain link that was hand-formed and then meticulously filed down in Good Art's Los Angeles-based foundry. The clasp, where Good Art pieces always tend to shine, is designed to look like a traditional box and tongue closure - down to the mock safeties on either side - but functions completely differently with two springs and hinges that press down to lock in or release the clasp. Entirely over-the-top functionality, just as you'd expect from Good Art. The entire bracelet is locally plated with 18k white gold to match the Canal Street chains that inspired this project. Each bracelet ships in a leather pouch. For more information on this project, please read our interview with Good Art's founder, Josh Warner here. Made in Los Angeles.",
            keyword: 'accessories',
            product_image: [
                './images/dummy/Cuban_Link_Bracelet1.jpg',
                './images/dummy/Cuban_Link_Bracelet2.jpg',
                './images/dummy/Cuban_Link_Bracelet3.jpg',
                './images/dummy/Cuban_Link_Bracelet4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 29,
            category_id: 5,
            product_name: 'LowerCase for 3sixteen Ace',
            sub_product_name: 'Triple Tortoise',
            price: 350,
            depscription:
                'The frame is crafted out of three distinct tortoise acetates that are mismatched together. The frame variance and detailing is especially stunning when light shines through.  The sunglasses also feature brown Carl Zeiss sun lenses, OBE German-engineered hinges and screws, and custom branded legs. Each pair ships in a dual-branded eyeglass case with polishing cloth. Made in USA.',
            keyword: 'accessories',
            product_image: [
                './images/dummy/LowerCase_for_3sixteen_Ace1.jpg',
                './images/dummy/LowerCase_for_3sixteen_Ace2.jpg',
                './images/dummy/LowerCase_for_3sixteen_Ace3.jpg',
                './images/dummy/LowerCase_for_3sixteen_Ace4.jpg',
            ],
            product_date: '2021-10-24',
        },
        {
            product_id: 30,
            category_id: 5,
            product_name: 'Lowercase for 3sixteen Dakota',
            sub_product_name: 'Triple Tortoise',
            price: 350,
            depscription:
                'The frame is crafted out of three distinct tortoise acetates that are mismatched together. The frame variance and detailing is especially stunning when light shines through.  The sunglasses also feature brown Carl Zeiss sun lenses, OBE German-engineered hinges and screws, and custom branded legs. Each pair ships in a dual-branded eyeglass case with a polishing cloth. Made in USA.',
            keyword: 'accessories',
            product_image: [
                './images/dummy/Lowercase_for_3sixteen_Dakota1.jpg',
                './images/dummy/Lowercase_for_3sixteen_Dakota2.jpg',
                './images/dummy/Lowercase_for_3sixteen_Dakota3.jpg',
                './images/dummy/Lowercase_for_3sixteen_Dakota4.jpg',
            ],
            product_date: '2021-10-24',
        },
    ],
});
