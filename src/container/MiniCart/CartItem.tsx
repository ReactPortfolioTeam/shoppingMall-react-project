import * as React from 'react';

interface IAppProps {
    product_id: string;
    product_option_id: number;
    product_name: string;
    sub_product_name: string;
    price: number;
    product_image: string;
    quantity: number;
    size: string;
}

const CartItem: React.FC<IAppProps> = ({
    product_id,
    product_option_id,
    product_name,
    sub_product_name,
    price,
    product_image,
    quantity,
    size,
}) => {
    return (
        <div
            className="line-item js-line-item"
            data-option-id={product_option_id} // poduct_option_id
            data-product-id={product_id} // product_id
            data-quantity={quantity} // quantity
            data-product-title={product_name} // product_name
            // tabIndex={0}
            aria-label="1 of Patchwork BD Shirt ~ Earth Khadi L for a price of 24000"
        >
            <div className="line-item-inner">
                <div className="line-image">
                    <a
                        className="link-to-product"
                        href="/collections/complete-the-fit-bottoms/products/block-bd-shirt-earth?variant=41093542248601"
                        // 추후 shop 연결 필요
                    >
                        <span className="visually-hidden">
                            Go to product page for `{product_name}` <br />`
                            {sub_product_name}`
                        </span>
                        <div className="portrait-product-image">
                            <div className="landscape-image-wrap">
                                <div className="lazy js-lazy image-landscape">
                                    <img
                                        className="lazy-img lazyload lazy-preload lazyautosizes lazy-loaded"
                                        src={product_image}
                                        // product_image[1]
                                        width="100"
                                        height="66"
                                        data-widths="[180, 330, 540, 900, 1280, 1440, 1800, 2048, 2560]"
                                        data-aspectratio=""
                                        data-sizes="auto"
                                        alt={product_name}
                                        sizes="86px"
                                    />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="line-info-wrap">
                    <div className="main-product-info line-info">
                        <div className="title-and-options">
                            <span className="h4 product-title">
                                <span className="title">
                                    {/* product_name */}
                                    {product_name}
                                </span>
                                <span className="title-sub">
                                    {/* sub_product_name */}
                                    {sub_product_name}
                                </span>
                            </span>
                            <span className="h5 item-options"></span>
                        </div>
                        <div className="size">
                            <span className="h5 size-label text-light-grey no-medium-up">
                                Size —
                            </span>
                            <span className="h6 item-size">{size}</span>
                        </div>
                        <div className="price">
                            <span className="h6 item-price">{price}</span>
                        </div>
                    </div>
                </div>
                <div className="line-price-and-remove-small">
                    <span className="h6 item-price">{price}</span>

                    <a
                        className="remove-line-item js-remove-line-item no-ajax"
                        href="/cart/change?line=3&amp;quantity=0"
                    >
                        <span className="remove-text">
                            translation missing: en.lineItem.remove
                        </span>
                        <span className="inline-icon" aria-hidden="true">
                            <svg viewBox="0 0 14 14">
                                <path d="M8.3 7.1l4 4-.7.7-4-4-4 4-.7-.7 4-4-4-4 .7-.7 4 4 4-4 .7.7-4 4z"></path>
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="line-remove no-small">
                    <a
                        className="remove-line-item js-remove-line-item no-ajax"
                        href="/cart/change?line=3&amp;quantity=0"
                        title="Remove"
                    >
                        <span className="remove-text">Remove</span>
                        <span className="inline-icon" aria-hidden="true">
                            <svg viewBox="0 0 14 14">
                                <path d="M8.3 7.1l4 4-.7.7-4-4-4 4-.7-.7 4-4-4-4 .7-.7 4 4 4-4 .7.7-4 4z"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
