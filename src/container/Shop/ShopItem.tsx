import { MyTheme } from 'assets/css/global/theme.style';
import React, {  useState } from 'react';
import styled from 'styled-components';

// type Props={
//     itemId:string,
//     itemSrc:string,
//     itemStockForS:number,
//     itemStockForM:number,
//     itemStockForL:number,
//     itemStockForXL:number,
//     itemStockForXXL:number,
//     itemName:string,
//     itemPrice : number,
//     itemColor:string
// }

/*
 재고가 없는 버튼은 disable하기
*/

/*
*itemObj = 
{
    itemId:string,
    itemSrc:string,
    itemName : string,
    itemPrice : number,
    ItemColor : string,
    itemStocks : StockSPerSize
}

StockSPerSize = 

{
    itemStockForS:number,
    itemStockForM:number,
    itemStockForL:number,
    itemStockForXL:number,
    itemStockForXXL:number
    
}
*
*/

const ShopItem=()=>{

    const [selected, setSelected] = useState(false);

    const onClick = ()=>{
        setSelected(prev=>!prev)
    }

    return(
        <ShopItemWithQuickAdd>
            <img src="https://picsum.photos/300?random=1" alt="sample"/>
            <div className="cart">
                {!selected &&
                    <div className="hover-target">
                        <span>+Add Cart</span>
                    </div>
                }
                    
                {selected && 
                    <div className="display-option">
                        <button onClick={onClick} type="button" className="option">X</button>
                        <input onClick={()=>alert("구현 필요")} className="add-cart" id="add" type="submit" value="Add to "/>    
                    </div>
                }

                <div className="container">
                    {!selected && 
                        <div>
                            <button type="button" onClick={onClick} className="soldout">
                                S
                            </button>
                            <button type="button" onClick={onClick} className="">
                                S
                            </button>
                            <button type="button" onClick={onClick} className="">
                                S
                            </button>
                            <button type="button" onClick={onClick} className="">
                                S
                            </button>
                            <button type="button" onClick={onClick} className="">
                                S
                            </button>
                        </div>
                    }
                </div>        
            </div>      
            <div className="meta-data">
                <h3 style={{display:'inline-block'}}>Patchwork BD Shirt</h3>
                <span style={{float:'right'}}>$240.00</span>
                <span style={{display:"block"}} >Earth Khadi</span>
            </div>
        </ShopItemWithQuickAdd>       
    )
}
export const ShopItemWithQuickAdd = styled.div`

    width: 45%;
    margin:${MyTheme.margins.m20};
    position:relative;
    margin-bottom:${MyTheme.margins.m80}; ;


    & img{
    width: 100%;
    height:100%;
    }

    & div.cart{
        display: inline-block;
        background-color: white;
        position:absolute;
        width: 100px;
        height: 30px;
        left: 20px;
        bottom: 5%;
        cursor:pointer;
        display: none;

        & .display-option {
            width:150%;
            background-color: red;
            justify-content: left;
        
        & .option{
            display: inline-block;
            width: 25%;
            height: 30px;
            background-color: white;
            color:black;
            border: none;
            cursor: pointer;

        }

        & .add-cart{
            width:75%;
            height: 30px;
            background-color:black;
            color:white;
            font-size: ${MyTheme.fonts.size.fs18};
            cursor: pointer;

        }



        }   

        & div{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        
        & .container{
            display:none;

            & div{
                display: inline-block;
                width:max-content;

                & input[type=radio]{
                    display:none;
                }
                & button{
                    display: inline-block;
                    width:50px;
                    height: 30px;
                    background-color: white;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;    
                    position: relative;
                    margin-right: -6px;
                    border: none;
                }
                & button.soldout::before{
                    content:'';
                    position: absolute;
                    width: 90%;
                    height:2px;
                    background-color:black;
                    bottom:50%;
                    left:10%;
                    transform: rotate(90edeg);
                    
                }
            }
        }
    }



    &:hover div.cart{
        display:block;
    }

    & div.cart:hover .hover-target{
        display: none;
        & ~ div{
            display: block;
        }
    }
    & div.meta-data{
        width: 100%;
        position:absolute;
        bottom:-45px;
        overflow: hidden;
}


`
export default ShopItem;