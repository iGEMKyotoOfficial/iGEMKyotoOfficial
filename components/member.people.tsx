import Image, { StaticImageData } from "next/image";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";

export default function Frame({
  children,
  subtitle,
  imageOn = true,
  src,
}: {
  children: React.ReactNode;
  subtitle: string;
  imageOn?: boolean;
  src: StaticImageData | string;
}) {
  return (
    <Container>
      <Row>
        <Col>
          {imageOn && (
            <figure
              style={{
                position: "relative",
                overflow: "hidden",
                width: "250px",
                height: "250px",
                marginLeft: "30px",
                borderRadius: "10px",
              }}
            >
              <Image
                className="people"
                src={src}
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </figure> //added line 17, custom classes not being usable in functions is a known bug
          )}
        </Col>
        <Col md="8">
          <h1
            className="people.name"
            style={{
              marginBottom: "30px",
              marginTop: "30px",
              marginLeft: "30px",
            }}
          >
            {subtitle}
          </h1>
          <p style={{ marginLeft: "30px" }}>{children}</p>
        </Col>
      </Row>
    </Container>
  );
}
