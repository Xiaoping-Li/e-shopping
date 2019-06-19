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
    updateAquariumCount = (update, idx) => this.aquarium[idx].count = update; 
    updateBirdCount = (update, idx) => this.bird[idx].count = update;
    updateFluffyCount = (update, idx) => this.fluffy[idx].count = update;
    updateReptileCount = (update, idx) => this.reptile[idx].count = update; 

    // Carts
    cart = {
        userID: '',
        status: '',
        pets: [],
        _id: '',
    };
    updateCart = (update) => this.cart = update;
    updatePets = (pet) => this.cart.pets.push({pet: pet, amount: 1});
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
        updateCart: action,
        updatePets: action,
    }
);

export default new GlobalStore();