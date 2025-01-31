import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;
    const {user}=useAuth();
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCart();
    const handleAddToCart =()=>{
      if(user && user.email){
        console.log(name, "food")
        const cartItem = {
          menuId: _id,
          email:user.email,
          name,
          image,
          price
        }
        console.log(food, "food")
        axiosSecure.post('/carts', cartItem)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            })
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }

    }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt={name}
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title uppercase">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 my-4">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
