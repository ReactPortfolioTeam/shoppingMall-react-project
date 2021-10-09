import * as React from 'react';

export interface NewsContentsProps {
    imageSrc: string;
    imageAlt: string;
}

const NewsContents: React.FC<NewsContentsProps> = (p: NewsContentsProps) => {
    const { imageSrc, imageAlt } = p;
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid red',
            }}
        >
            <img
                src={imageSrc}
                alt={imageAlt}
                style={{
                    objectFit: 'cover',
                }}
            />
            <p
                style={{
                    margin: '12px',
                }}
            >
                <h4
                    style={{
                        margin: '4px',
                    }}
                >
                    Product Name
                </h4>
                Product description
            </p>
        </div>
    );
};

export default NewsContents;
