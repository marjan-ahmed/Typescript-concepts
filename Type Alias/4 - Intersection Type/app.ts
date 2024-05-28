type Bag1 = {
    towel: boolean;
    snacks: boolean;
};

type Bag2 = {
    sunCream: boolean;
    hats: boolean;
    snacks: boolean;
};

type Bag3 = Bag1 & Bag2;

const bag3: Bag3 ={
    towel: true,
    snacks: true,
    sunCream: true,
    hats: true,
}