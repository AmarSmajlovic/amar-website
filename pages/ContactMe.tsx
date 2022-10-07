/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NextPage } from "next";
import { ContainerPage } from "../styles/ContainerPage";
import Head from "next/head";
import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ContactMeField, contactMeSchema } from "../validations/ContactMe";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextArea, Input } from "../components";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

interface ContactMeInputs {
  [ContactMeField.NAME]: string;
  [ContactMeField.EMAIL]: string;
  [ContactMeField.MESSAGE]: string;
  [ContactMeField.RECAPTCHA]: string | null;
}

const ContactMe: NextPage = () => {
  const toast = useToast();
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<ContactMeInputs>({
    resolver: yupResolver(contactMeSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  function onChange(value: string | null) {
    setValue(ContactMeField.RECAPTCHA, value, { shouldValidate: true });
  }

  const submit = handleSubmit(async (data: ContactMeInputs) => {
    const templateParams = { ...data };
    try {
      await emailjs.send(
        "service_f31lre5",
        "portfolio_contact_me",
        templateParams,
        "plcfHiNRhbz5SIs6S"
      );
      reset();
      toast({
        title: "Thank you for contacting me",
        description:
          "Looking forward for out potential cooperation, I'll response as soon as possible.",
        status: "success",
        duration: 10000,
        isClosable: true,
        containerStyle: { padding: "10px" },
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Sorry, it seems there is  some issue, please try again.",
        status: "error",
        duration: 10,
        isClosable: true,
        containerStyle: { padding: "10px" },
      });
    }
  });

  return (
    <ContainerPage id="contact">
      <Head>
        <title>Amar's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex height="100%" alignItems="center" gap="10px" direction="column">
        <Text fontSize="3xl">Contact</Text>
        <Text as="i" fontSize={14}>
          Get In Touch With Me
        </Text>
        <Input
          name={ContactMeField.NAME}
          control={control}
          defaultValue=""
          placeholder={ContactMeField.NAME}
          error={errors[ContactMeField.NAME]}
        />
        <Input
          name={ContactMeField.EMAIL}
          control={control}
          defaultValue=""
          placeholder={ContactMeField.EMAIL}
          error={errors[ContactMeField.EMAIL]}
        />
        <TextArea
          name={ContactMeField.MESSAGE}
          control={control}
          defaultValue=""
          placeholder={ContactMeField.MESSAGE}
          error={errors[ContactMeField.MESSAGE]}
        />
        <Button width="full" onClick={submit} disabled={!isValid}>
          SUBMIT
        </Button>
        <ReCAPTCHA
          size="normal"
          sitekey="6LfUZVQiAAAAAKXXs6i2IWo9el-ocaJuUKUiUAx0"
          onChange={onChange}
        />
      </Flex>
    </ContainerPage>
  );
};

export default ContactMe;
