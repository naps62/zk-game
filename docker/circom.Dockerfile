FROM rustlang/rust:nightly-alpine3.15 as circom_compiler

RUN apk add --no-cache git musl-dev
RUN git clone https://github.com/iden3/circom.git
RUN cd circom && \
  cargo build --release

FROM rustlang/rust:nightly-alpine3.15

RUN apk add --no-cache \
  git musl-dev \
  nodejs~=16 yarn

COPY --from=circom_compiler circom circom

RUN cd circom && \
  cargo install --path circom