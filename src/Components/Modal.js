import './Modal.css';

const Modal = ({children, isOpen,closeModal }) => {

	const handleModalContainerClick = (e) => e.stopPropagation(); 

    return (
        <div onclick={closeModal} className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container" onClick={handleModalContainerClick}>
    			<button className="modal-close"  onClick={closeModal}>
    				<i class="far fa-times-circle"></i>
    			</button>
    			{children}
    		</div>
    	</div>

    );
};

export default Modal;
