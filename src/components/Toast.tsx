import React from 'react';
import {Toast} from 'react-native-ui-lib';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {Icons} from '../utils/images';
import colors from '../styles/colors';
import '../styles/styles';
import {clearToast} from '../app/features/utils/toastSlice';

export type ToastPosition = 'top' | 'bottom';
export type ToastType = 'default' | 'success' | 'error' | 'warning';

interface Props {
  // timeIn?: number;
  // timeOut?: number;
}
const ToastComponent: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const toast = useAppSelector((state: any) => state.toast);

  //check nếu có trạng thái tự động đóng thì thực hiện đóng
  React.useEffect(() => {
    let autoCloseToast: any = null;
    if (!toast.keep) {
      autoCloseToast = setTimeout(() => {
        _onDismiss();
      }, 4000);
    }
    return () => {
      clearTimeout(autoCloseToast);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  const _onDismiss = () => {
    dispatch(clearToast());
  };

  return (
    <Toast
      visible={toast.visible}
      position="top"
      backgroundColor={
        toast.type === 'success'
          ? colors.toastSuccess
          : toast.type === 'error'
          ? colors.toastError
          : 'transparent'
      }
      message={toast.message}
      zIndex={999}
      onDismiss={_onDismiss}
      icon={
        toast.type === 'success' ? Icons.TOAST_SUCCESS : Icons.TOAST_WARNING
      }
      showDismiss
    />
  );
};

ToastComponent.defaultProps = {};

export default ToastComponent;
