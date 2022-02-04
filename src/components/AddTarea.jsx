
const AddTarea = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Tarea</label>
                <input type="text" placeholder="Agregar Tarea" />
            </div>
            <div className="form-control">
                <label>Fecha</label>
                <input type="text" placeholder="Fecha" />
            </div>
            <div className="form-control-check">
                <label>Terminado</label>
                <input type="checkbox" />
            </div>
            <input type="submit" value='Guardar Tarea' className="btn btn-block"/>
        </form>);
};

export default AddTarea;
