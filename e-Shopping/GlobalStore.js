import { observable, decorate, action } from 'mobx';

class GlobalStore {
    // User
    user = {
        username: '',
        email: '',
        thumbnail: '',
        _id: '',
    };
    updateUser = (updated) => this.user = updated;

    // Pets 'Aquarium', 'Bird', 'Fluffy', 'Reptile'
    aquarium = [];
    bird = [];
    fluffy = [];
    reptile = [];
    initAquarium = list => this.aquarium = list;
    initBird = list => this.bird = list;
    initFluffy = list => this.fluffy = list;
    initReptile = list => this.reptile = list;
    updateAquariumCount = (update, petID) => {
        const idx = this.aquarium.findIndex(pet => pet._id === petID);
        this.aquarium[idx].count -= update
    }; 
    updateBirdCount = (update, petID) => {
        const idx = this.bird.findIndex(pet => pet._id === petID);
        this.bird[idx].count -= update
    };
    updateFluffyCount = (update, petID) => {
        const idx = this.fluffy.findIndex(pet => pet._id === petID);
        this.fluffy[idx].count -= update
    };
    updateReptileCount = (update, petID) => {
        const idx = this.reptile.findIndex(pet => pet._id === petID);
        this.reptile[idx].count -= update
    }; 

    // Carts
    cart = {
        status: '',
        _id: '',
    };
    pets = [];
    initCart = (cart) => {
        this.cart._id = cart._id;
        this.cart.status = cart.status;
    };
    initPets = pets => this.pets = pets;
    addPet = (pet) => this.pets.push({pet: pet, quantity: 1, _id: pet._id});
    removePet = petID => this.pets = this.pets.filter(pet => pet._id !== petID);
   

    // Carousel visible
    petsCarousleVisible = false;
    togglepetsCarousleVisibility = () => this.petsCarousleVisible = !this.petsCarousleVisible;
}

decorate(
    GlobalStore,
    {
        // User
        user: observable,
        updateUser: action,

        // Pets
        aquarium: observable,
        bird: observable,
        fluffy: observable,
        reptile: observable,
        initAquarium: action,
        initBird: action,
        initFluffy: action,
        initReptile: action,
        updateAquariumCount: action,
        updateBirdCount: action,
        updateFluffyCount: action,
        updateReptileCount: action,

        // Cart
        cart: observable,
        pets: observable,
        initPets: action,
        initCart: action,
        addPet: action,
        removePet: action,

        // Carousel
        petsCarousleVisible: observable,
        togglepetsCarousleVisibility: action,
    }
);

export default new GlobalStore();