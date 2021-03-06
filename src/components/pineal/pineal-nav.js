import '/node_modules/interactjs/dist/interact.min.js';
var url = new URL(import.meta.url);


export default class Element extends HTMLElement{
	static get is(){
    return 'pineal-nav';
  	}

	static get template(){
   		return`
		
		  <style>
		    :host, main {
		    	position: relative;
				transition: margin-left .5s;
		    }

		    :host {
		      height: 100%;
		    }

		    header{
		    	position: absolute;
		    	top: 0;
		    	left: 0;
		    	right: 0;
		      z-index: 9;
		      height: 48px;
		    }

		   paper-swatch-picker{
		      margin: 8px;
		   	background-color: #ffffffc9;
		   	border-radius: 50%;
		   }

		    main > .app.selected{
		      display: block;
		    }
		  </style>


		<link href="//${url.host}/design/nav.css" rel="stylesheet"  rel="preload" as="style">
		<link rel="stylesheet" href="//${url.host}/design/components/fractal-head.css" rel="preload" as="style">

	  
		<div id='nav'>
			<header id="brand">
				<span id='logo'></span>
			</header>


			<pineal-tree opened='0 1 topSites private menu'></pineal-tree>

			<footer>
			</footer>
		</div>
		`;
   }

	constructor(){
		super();
		this.tid = {
			acc: 1
		}

		this.items = {};
		this.files = {};
		
		if(0){
			this.attachShadow({ mode: 'open' });
			this.root = this.shadowRoot;
			this.root.innerHTML = Element.template;
		}
		else{
			this.innerHTML = Element.template;
			this.root = this.getRootNode();
		}


		this.main = this.root.querySelector('#nav');
		
		this.main.addEventListener('click_node', ev => {
			this.open(ev.detail.node);
		});

		var handler = event => {
			if(!document.body.classList.contains('mobile')) return;
			if(event.target.closest('#nav')) return;

			// If user clicks outside the element, hide it!
			document.body.classList.add("closed");
		};

		interact(document.getElementById('body')).on('tap', handler);

		var src = this.getAttribute('src');
		if(src)
			this.set_src(src);
		
		//this.init();
	}


 	open(node){
		if(node.isFolder()) return;

		$('.tree .active').removeClass('active');

		if(node.neuron && node.neuron.open){
			node.neuron.open();
			
			if(document.body.classList.contains('mobile'))
				document.body.classList.add("closed");
		}
		else
		if(node.item.type == 'component' && node.item.element){
			var element_name = typeof node.item.element == 'string'?
			  node.item.element:
			  node.item.element.name;

			var id = element_name+'-'+md5(node.link.url);
			var apps = document.getElementById('body'),
			    app = document.getElementById(id);

			if(app) apps.open(app);
			else{
			  var wrap = node.wrap = new Wrapper(node.link, {
			    $parent: $(apps),
			    inherit: {
			      noChildren: true
			    }
			  });

			  wrap.loadPromise.then(item => {
			    var container = wrap.element;
			    container.classList.add('app');
			    container.id = id;
			    
			    apps.open(container);
			  });
			}
		}
		else
			node.toggle();

		node.$node.addClass('initiated active');
	}

	set_src(src){
		this.select('pineal-tree').setAttribute('src', src)
	}
    
	static get observedAttributes(){
	    return ['src'];
	}

	attributeChangedCallback(name, oldValue, newValue){
        this['set_'+name](newValue);
	}

	select(selector){
	    return this.root.querySelector(selector);
	}
};

window.customElements.define(Element.is, Element);