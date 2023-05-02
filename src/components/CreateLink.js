import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';


const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $marca: String!
    $modelo: String!
    $motor: String!
    $consumog: Int!
    $capacidadg: Float!
    $cilindraje: Int!
    $version: String!
    $color: String!
    $precio: Decimal!
  ) {
    createMotocicleta(description: $description, marca: $marca, modelo: $modelo, motor: $motor, consumog: $consumog, capacidadg: $capacidadg, cilindraje: $cilindraje, version: $version, color: $color, precio: $precio ) {
      id
      description
      marca
      modelo
      motor
      consumog
      capacidadg
      cilindraje
      version
      color
      precio
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    description:'String',
    marca:'String',
    modelo:'String',
    motor:'String',
    consumog: 0,
    capacidadg: 0,
    cilindraje: 0,
    version:'String',
    color:'String',
    precio: 0.00

  });
  const [CreateLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      marca: formState.marca,
      modelo: formState.modelo,
      motor: formState.motor,
      consumog: formState.consumog,
      capacidadg: formState.capacidadg,
      cilindraje: formState.cilindraje,
      version: formState.version,
      color: formState.color,
      precio:formState.precio
    },
    onCompleted: () => navigate('/')
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CreateLink();
        }}
      >
        <div className="flex flex-column mt3">
          Descripcion
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder=" Description "
          />
          Marca
          <input
            className="mb2"
            value={formState.marca}
            onChange={(e) =>
              setFormState({
                ...formState,
                marca: e.target.value
              })
            }
            type="text"
            placeholder="Marca"
          />
          Modelo
          <input
            className="mb2"
            value={formState.modelo}
            onChange={(e) =>
              setFormState({
                ...formState,
                modelo: e.target.value
              })
            }
            type="text"
            placeholder="Modelo"
          />
          Motor
          <input
            className="mb2"
            value={formState.motor}
            onChange={(e) =>
              setFormState({
                ...formState,
                motor: e.target.value
              })
            }
            type="text"
            placeholder="Motor"
          />
          Consumo de gasolina
          <input
            className="mb2"
            value={formState.consumog}
            onChange={(e) =>
              setFormState({
                ...formState,
                consumog: e.target.value
              })
            }
            type="text"
            placeholder="Consumo de gasolina"
          />
          Capacidad de gasolina
          <input
            className="mb2"
            value={formState.capacidadg}
            onChange={(e) =>
              setFormState({
                ...formState,
                capacidadg: e.target.value
              })
            }
            type="text"
            placeholder="Capacidad de gasolina "
          />
          Cilindraje
          <input
            className="mb2"
            value={formState.cilindraje}
            onChange={(e) =>
              setFormState({
                ...formState,
                cilindraje: e.target.value
              })
            }
            type="text"
            placeholder="Cilindraje"
          />
          Version
          <input
            className="mb2"
            value={formState.version}
            onChange={(e) =>
              setFormState({
                ...formState,
                version: e.target.value
              })
            }
            type="text"
            placeholder="Version"
          />
          Color
          <input
            className="mb2"
            value={formState.color}
            onChange={(e) =>
              setFormState({
                ...formState,
              color: e.target.value
              })
            }
            type="text"
            placeholder="Color"
          />
          Precio
          <input
            className="mb2"
            value={formState.precio}
            onChange={(e) =>
              setFormState({
                ...formState,
                precio: e.target.value
              })
            }
            type="text"
            placeholder="Precio"
          />
          
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;