const DeleteButton =(props)=>{
    const handleDelete = () =>{
        props.deleteProduct(props.product.id);
        props.setProduct(null);
        // alert(`Deleting ${product.name}`);
      };
    return (
    <button className="btn btn-outline-danger" onClick={handleDelete} >
        Delete
      </button>
    )
}
export default DeleteButton;