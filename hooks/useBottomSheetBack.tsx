import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { BackHandler } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const useBottomSheetBack = (
  bottomSheetOpen: boolean,
  bottomSheetModalRef: React.MutableRefObject<BottomSheetModal>,
  onClose?: () => void
) => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (bottomSheetOpen && bottomSheetModalRef.current) {
          bottomSheetModalRef.current.close();
          onClose?.();
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [bottomSheetModalRef, bottomSheetOpen, onClose])
  );
};
