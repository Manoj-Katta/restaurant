export const Item = ({image, name, price}) => {
    return (
      <div className="bg-amber-300 h-auto max-w-xs sm:max-w-md rounded-xl p-4 m-3 hover:scale-110 transition transform duration-300">
        <div>
          <img src={image} alt={name} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, voluptate!
          </p>
          <h4 className="font-bold text-xl">
            <span className="font-bold">$</span>{price}
          </h4>
        </div>
      </div>
    );
  };
  