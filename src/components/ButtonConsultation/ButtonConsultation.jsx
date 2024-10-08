import { AppointmentForm } from './AppointmentForm';
import { ButtonStyled } from './ButtonConsultation.styled';
import { ModalFromRoot } from '../ModalFromRoot';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowDimensions } from '../../hooks';

export const ButtonConsultation = ({
  className,
  customStyles,
  modalActive,
  setModalActive,
}) => {
  const [t, i18n] = useTranslation('global');
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  const toggleModal = () => {
    document.body.style.overflowY = 'hidden';
    setModalActive(prev => !prev);
  };

  return (
    <>
      {modalActive && (
        <ModalFromRoot
          toggleModal={toggleModal}
          align={'center'}
          padding={width < 1024 ? '90px 0' : null}
        >
          <AppointmentForm setModalActive={setModalActive} />
        </ModalFromRoot>
      )}

      <ButtonStyled
        aria-label="Записатися на консультацію"
        type="button"
        onClick={() => setModalActive(prev => !prev)}
        className={className}
        style={customStyles}
      >
        {t('header.btnAppoitment')}
      </ButtonStyled>
    </>
  );
};

ButtonConsultation.propTypes = {
  className: PropTypes.string,
  customStyles: PropTypes.object,
  modalActive: PropTypes.bool.isRequired,
  setModalActive: PropTypes.func.isRequired,
};