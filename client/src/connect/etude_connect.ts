// @generated by protoc-gen-connect-es v0.10.0 with parameter "target=ts,import_extension=.ts"
// @generated from file etude.proto (package etude.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CreateUserRequest, Empty, HelloRequest, HelloResponse } from "./etude_pb.ts";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service etude.v1.EtudeService
 */
export const EtudeService = {
  typeName: "etude.v1.EtudeService",
  methods: {
    /**
     * @generated from rpc etude.v1.EtudeService.Hello
     */
    hello: {
      name: "Hello",
      I: HelloRequest,
      O: HelloResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc etude.v1.EtudeService.CreateUser
     */
    createUser: {
      name: "CreateUser",
      I: CreateUserRequest,
      O: Empty,
      kind: MethodKind.Unary,
    },
  }
} as const;

