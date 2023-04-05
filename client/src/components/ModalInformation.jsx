export const ModalInformation = ({
  idModal,
  tabIndex,
  ariaLabelledby,
  ariaHidden,
  className,
  information,
}) => {
  return (
    <div
      id={idModal}
      className={className}
      tabIndex={tabIndex}
      aria-labelledby={ariaLabelledby}
      aria-hidden={ariaHidden}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Realizando solicitud
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h3>{information}</h3>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
