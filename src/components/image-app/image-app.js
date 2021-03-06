import template from './image-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'    
};

function controller() {
  this.images = [
    { title: 'Pygmy Rabbit',
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/BRACHYLAGUS_IDAHOENSIS.jpg',
      desc: 'The pygmy rabbit (Brachylagus idahoensis) is a North American rabbit, and is one of only two rabbit species in America to dig its own burrow. The pygmy rabbit is the world\'s smallest leporid, with mean adult weights from 375 to about 500 grams, and a body length from 23.5 to 29.5 centimeters; females are slightly larger than males.'
	 }
  ];
  this.views = ['text-only', 'thumbnail', 'full-image'];
}