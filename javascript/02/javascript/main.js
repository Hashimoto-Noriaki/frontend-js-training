const user = {
    name:'橋本',
    alertName: function(){
        window.alert(this.name);
    },
};

console.log(user);

function execute({ animal1, animal2, animal3 }) {
    return { animal1, animal2, animal3 };
}
    const result = execute({ animal1: '犬', animal2: '猫', animal3: '猿' });
    console.log(result);
  //{animal1: '犬', animal2: '猫', animal3: '猿'}