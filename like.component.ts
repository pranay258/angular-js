
export class LikeComponent {
    likesCount: number;
    isSelected: boolean; 
    constructor(likesCount: number, isSelected: boolean) {
    }

    onClick() {
        this.likesCount += (this.likesCount) ? -1 : +1;
        this.isSelected = !this.isSelected;
    }

   

   
}