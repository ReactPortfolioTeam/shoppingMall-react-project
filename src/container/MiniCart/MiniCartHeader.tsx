import * as React from 'react';

interface IAppProps {
    setIsCart: any;
}

const MiniCartHeader: React.FC<IAppProps> = ({ setIsCart }) => {
    return (
        <div className="mini-cart-header">
            <div className="cart-header-left">
                <span className="styled-dot"></span>
                <span className="h4">Your bag</span>
            </div>
            <div className="cart-header-right">
                <a className="header-logo" href="https://www.3sixteen.com">
                    <div className="visually-hidden">3sixteen</div>
                    <svg viewBox="0 0 373 135">
                        <path
                            d="M35.9 69.498c10.007-4.222 11.766-12.405 11.766-16.025 0-12.415-9.022-19.419-21.085-19.419-14.029 0-22.244 8.51-22.244 8.51l5.069 8.642S15.586 42 24.832 42c7.48 0 12.36 5.548 11.98 13.86-.19 4.19-3.574 11.265-10.176 11.265h-8.25l-2.604 7.945h5.907c9.452 0 14.992 5.918 14.992 14.16 0 4.775-3.14 12.48-13.223 12.48-2.974 0-10.072-.275-18.934-9.168L0 102.422c7.024 5.804 16.347 7.234 22.444 7.234 9.835 0 25.75-6.661 25.75-21.745 0-9.12-5.152-15.776-12.294-18.413zm270.647-3.943c-1.86-9.002-8.186-14.869-17.05-14.869-10.355 0-15.326 7.823-16.537 14.87h33.587zm10.331 7.719h-44.117c.997 8.44 7.098 19.865 21.642 19.865 6.316 0 11.14-2.286 17.762-7.648l4.032 4.81s-9.195 10.783-25.881 10.783c-15.75 0-29.4-11.818-29.4-27.697 0-14.4 10.383-30.761 29.794-30.761 20.062 0 28.501 19.227 26.168 30.648zm-70.47-7.719c-1.86-9.002-8.187-14.869-17.05-14.869-10.356 0-15.326 7.823-16.538 14.87h33.589zm10.33 7.719h-44.116c.996 8.44 7.098 19.865 21.64 19.865 6.318 0 11.14-2.286 17.764-7.648l4.032 4.81s-9.196 10.783-25.881 10.783c-15.75 0-29.4-11.818-29.4-27.697 0-14.4 10.383-30.761 29.794-30.761 20.062 0 28.5 19.227 26.167 30.648zM63.641 57.382c0-4.473 4.18-6.696 7.498-6.696 7.57 0 12.519 5.785 12.519 5.785l4.275-9.191c-2.597-1.789-7.545-4.655-14.53-4.655-14.148 0-21 10.436-21 17.821 0 19.136 26.678 10.53 26.678 25.427 0 3.375-3.038 7.265-7.803 7.265-4.453 0-8.37-1.95-14.948-7.207l-4.524 9.88c4.69 3.406 12.812 5.273 17.76 5.273 5.21 0 20.412-2.72 20.412-18.73 0-19.416-26.337-11.436-26.337-24.972zm33.111-8.74v51.08h11.804V43.987H94.019l2.733 4.654zm111.274-4.654h-16.687V31h-11.694v12.987h-4.967l-4.864 6.698h9.831v49.035h11.694V50.686h11.821l4.866-6.698zm144.51-1.362c-8.68 0-15.201 3.775-19.169 8.286v-6.924h-14.605l3.028 5.107v50.627h11.804V60.789c3.997-5.851 9.185-10.103 14.367-10.103 10.322 0 10.947 10.713 10.947 13.394v35.642h11.803V60.447c0-10.814-6.375-17.821-18.176-17.821zm-203.764 28.15l21.114 28.946H155.47l-15.1-20.886-15.322 20.886h-11.123l20.772-28.718-19.638-27.016h14.416L143.21 62.83l10.557-14.189-2.765-4.654h17.294l-19.524 26.789z"
                            fill="#000"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </a>
                <button
                    id="close-mini-cart"
                    className="button-text js-close-mini-cart"
                    type="button"
                    tabIndex={0}
                    onClick={() => setIsCart(false)}
                >
                    <span className="visually-hidden">Close</span>
                    <span className="inline-icon">
                        <svg viewBox="0 0 14 14">
                            <path d="M8.3 7.1l4 4-.7.7-4-4-4 4-.7-.7 4-4-4-4 .7-.7 4 4 4-4 .7.7-4 4z"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default MiniCartHeader;
