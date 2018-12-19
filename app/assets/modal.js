/** 
  * @desc this class provides the complete logic for the modal to be controlled
  * @author Fabian Bauer bauer.fa@gmail.com
  * @required $jQuery
*/

// get some sample data
import categorie from './categories.js';

class Modal {
	constructor() {
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalBtn = $('.modal__close');
    this.categorieDetailButtons = new Array();
    categorie.forEach((categorie, i) => {
      this.categorieDetailButtons[i] = $('#categorie-item-' + i); 
    });
    this.setCategories(categorie);
    this.events();
  }

  /**
  * @desc sets the categorie titles in the categories list
  * @param array categorie - categories to be set
  */
  setCategories(categorie) {
    categorie.forEach((categorie, i) => {
      $('#categorie-item-' + i).html(categorie.title);
    });
  }

  /**
  * @desc keeps a reference to the possible actions
  */
	events() {
		// Click open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// Click X close modal button
		this.closeModalBtn.click(this.closeModal.bind(this));

		// Click ESC key button
    $(document).keyup(this.keyPressHandler.bind(this));
    
    // Click categorie detail button and fire setCategorieDetail()
    categorie.forEach((categorie, i) => {   
      this.categorieDetailButtons[i].on( "click mouseover", function() {
        $('.modal__categories-list-item').removeClass('active');
        $( this ).addClass('active');
        $('.modal__categories-detail h2').fadeOut( 'fast', function() {
          $('.modal__categories-detail h2').text(categorie.title).fadeIn('fast');
        });

        $('.modal__categories-detail p').fadeOut( 'fast', function() {
          $('.modal__categories-detail p').text(categorie.content).fadeIn('fast');
        });
        return this.setCategorieDetail(i)
      });
    });
  }
  
  /**
  * @desc sets the categorie title & content in the categories detail section
  * @param int i - index of the categories to be set
  */
  setCategorieDetail(i) {
    console.log('setCatD: ' + i)
    $('.modal__categories-detail h2').text(categorie[i].title);
    $('.modal__categories-detail p').text(categorie[i].content);
  }

  /**
  * @desc listens if the ESC key was pressed
  * @param Object e - keeps a reference of the pressed key
  */
	keyPressHandler(e) {
		if (e.keyCode === 27) {
			this.closeModal();
		}
	}

  /**
  * @desc opens the modal
  * @return bool 
  */
	openModal() {
		this.modal.addClass('modal--is-visible');
		return false;
  }
  
  /**
  * @desc close the modal
  */
	closeModal() {
		this.modal.removeClass('modal--is-visible');
	}
}

export default Modal;