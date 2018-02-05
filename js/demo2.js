(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    // this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    // this.innerHTML = "Menu";
	    this.innerHTML = '<img src="images/benchi_r1_c2.jpg" style="width:75px;height:75px;" alt="">';
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();

// 第二个车标
(function(){

	var button = document.getElementById('cn-button1'),
    wrapper = document.getElementById('cn-wrapper1');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    // this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav1');
	  }
	  else{
	    // this.innerHTML = "Menu";
	    this.innerHTML = '<img src="images/carLogo.jpg" style="width:75px;height:75px;" alt="">';
		classie.remove(wrapper, 'opened-nav1');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav1');
	}

})();
