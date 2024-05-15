"use client";
import React from "react";

import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";

type Props = {};

const LoginModal = (props: Props) => {
  const loginModal = useLoginModal();

  const content = (
    <h2 className="mb-6 text-2xl">Welcome to Resort. please login!</h2>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
