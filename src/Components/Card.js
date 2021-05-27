import React, { PropTypes } from 'react';
import './Card.css';
import {useModal} from '../hooks/useModals.js';
import Modal from './Modal.js';

const Card = ({movie}) => {

	const[isOpenModal, openModal, closeModal] = useModal(false);

	

    return (
        <>
			<div className="card" key={movie.id} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})`}}>
				<div className="box-hidden">
					<h3 className="">{movie.title}</h3>
					<p className="">{movie.overview}</p>
				</div>
				<button type="button" onClick={openModal} className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-800 hover:shadow-lg button">
					Ver Detalle
				</button>
				<Modal isOpen={isOpenModal} closeModal={closeModal}>
					<div className="modal-card">
						<img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
						<div className="">
							<h2>{movie.title}</h2>
							<div className="ul">
								<li>{`Estreno: ${movie.release_date}`}</li>
								<li>{`Puntacion: ${movie.vote_average}`}</li>
							</div>
							<p>{movie.overview}</p>
						</div>	

					</div>
				</Modal>
			</div>




        </>
    )
};

export default Card;

