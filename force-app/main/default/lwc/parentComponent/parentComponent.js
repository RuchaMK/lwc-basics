import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    
    //Non - Primitive array of ojects
    carouselObj = [
        { 
        src:"https://fastly.picsum.photos/id/16/2500/1667.jpg",
        header:"First card",
        description:"First card description",
        alternativeText:"This is a card"
        },
        {
        src:"https://fastly.picsum.photos/id/25/5000/3333.jpg",
        header:"Second card",
        description:"Second card description",
        alternativeText:"This is a card"
        },
         { 
        src:"https://fastly.picsum.photos/id/18/2500/1667.jpg",
        header:"Third card",
        description:"Third card description",
        alternativeText:"This is a card"
        },
        {
        src:"https://fastly.picsum.photos/id/19/2500/1667.jpg",
        header:"Fourth card",
        description:"Fourth card description",
        alternativeText:"This is a card"
        },
        { 
        src:"https://picsum.photos/200/300?random=2",
        header:"Fifth card",
        description:"Fifth card description",
        alternativeText:"This is a card"
        },
        {
        src:"https://fastly.picsum.photos/id/10/2500/1667.jpg",
        header:"Sixth card",
        description:"Sixth card description",
        alternativeText:"This is a card"
        }
    ]

    //on occurrence of an event or action in Parent call child method 
    handleClick(){
        this.template.querySelector('c-child-component').handleButtonClick();
    }

    //using getter setter to modify Parent Data 
    luckyDraw={
        Id:108,
        voucher:200
    }

}