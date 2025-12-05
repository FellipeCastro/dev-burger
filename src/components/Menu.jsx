import Card from "./Card";

const Menu = ({ menuItems, addOnCart, cart }) => {
    const categories = [...new Set(menuItems.map((item) => item.category))];

    return (
        <section className="w-full px-[5%] py-12 md:py-20">
            {/* Título principal */}
            <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
                Conheça nosso cardápio
            </h1>

            {/* Categorias e Cards */}
            <div className="space-y-12">
                {categories.map((category) => (
                    <div key={category} className="space-y-6">
                        {/* Título da categoria */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pb-2">
                            {category}
                        </h2>

                        {/* Grid de cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {menuItems
                                .filter((item) => item.category === category)
                                .map((item) => {
                                    const cartItem = cart.find(
                                        (cartItem) => cartItem.id === item.id
                                    );
                                    return (
                                        <Card
                                            key={item.id}
                                            title={item.title}
                                            img={item.img}
                                            description={item.description}
                                            price={item.price}
                                            quantity={
                                                cartItem ? cartItem.quantity : 0
                                            }
                                            addOnCart={() => addOnCart(item)}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
