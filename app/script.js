let optionBlocks = document.querySelectorAll('.option-block');
let slideBlocks = document.querySelectorAll('.slide-block');

for (i = 0; i < optionBlocks.length; i++){
    optionBlocks[i].addEventListener('click', function(){
        for(j = 0; j < optionBlocks.length; j++){
            optionBlocks[j].classList.remove('show');
        }

        this.classList.add('show');

        let showIndex = this.dataset.index;

        for(y = 0; y < slideBlocks.length; y++){
            slideBlocks[y].classList.remove('show')
        }

        document.querySelector('.slide-block[data-index="' + showIndex + '"]').classList.add('show');

    });
}