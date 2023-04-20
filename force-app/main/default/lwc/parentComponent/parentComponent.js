import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    carouselObj = [
        { 
        src:"path/to/carousel-01.jpg",
        header:"First card",
        description:"First card description",
        alternativeText:"This is a card",
        href:"https://fastly.picsum.photos/id/16/2500/1667.jpg"
        },
        {
        src:"path/to/carousel-01.jpg",
        header:"Second card",
        description:"Second card description",
        alternativeText:"This is a card",
        href:"https://fastly.picsum.photos/id/25/5000/3333.jpg"
        },
         { 
        src:"path/to/carousel-01.jpg",
        header:"Third card",
        description:"Third card description",
        alternativeText:"This is a card",
        href:"https://fastly.picsum.photos/id/18/2500/1667.jpg"
        },
        {
        src:"path/to/carousel-01.jpg",
        header:"Fourth card",
        description:"Fourth card description",
        alternativeText:"This is a card",
        href:"https://fastly.picsum.photos/id/19/2500/1667.jpg"
        },
        { 
        src:"path/to/carousel-01.jpg",
        header:"Fifth card",
        description:"Fifth card description",
        alternativeText:"This is a card",
        href:"https://fastly.picsum.photos/id/17/2500/1667.jpg"
        },
        {
        src:"path/to/carousel-01.jpg",
        header:"Sixth card",
        description:"Sixth card description",
        alternativeText:"This is a card",
        href:"https://fastly.picsum.photos/id/10/2500/1667.jpg"
        }
    ]
    handleClick(){
        this.template.querySelector('c-child-component').handleButtonClick();
    }

}