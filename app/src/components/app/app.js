import template from './app.html';
import styles from './app.scss';

// export default {
//   template,
//   controller,
//   controllerAs: 'app'   
// };

// controller.$inject = ['imageService'];

// function controller(images) {

//   this.views = ['add new image', 'image view', 'remove image', 'text-only view', 'thumbnail view' ];

//   this.styles = styles;

//   this.loading = true;

//   images.get().then(images => {
//     this.loading = false;
//     this.images = images;
//   });

//   this.remove = image => {
//     this.loading = true;
//     images.remove(image._id)
//             .then(() => {
//               this.loading = false;
//               const index = this.images.indexOf(image);
//               if (index > -1) this.images.splice(index, 1);
//             });
//   };

//   this.add = image => {
//     this.loading = true;
//     images.add(image)
//             .then(saved => {
//               this.loading = false;
//               this.images.push(saved);
//             });
//   };
// }

export default {
  template,
  controller
};

controller.$inject = ['albumService', '$state'];
function controller(albums, $state) {
  this.styles = styles;

  this.loading = true;

  // this.updateView = () => {
  //   $state.go($state.current.name, { view: this.view });
  // };

  albums.get().then(albums => {
    this.loading = false;
    this.albums = albums;
  });

  this.add = album => {
    this.loading = true;
    albums.add(album)
            .then(saved => {
              this.loading = false;
                // push to in-memory array
              this.albums.push(saved);
            });
  };
}