import React from "react";

import styles from "./RecipeModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faClock, faThumbsUp } from "@fortawesome/free-regular-svg-icons";

const {
  modal,
  modalContent,
  closeButton,
  modalTitle,
  modalImage,
  modalStats,
  modalStatsItem,
  modalRecipeContainer,
  modalRecipeTag,
  modalIngredientsList,
  modalIngredientItem,
  modalStepsList,
  modalStepItem,
} = styles;

const RecipeModal = ({ isModalShown, setIsModalShown, recipe, recipeInfo }) => {
  const clickOffModal = (e) => {
    if (e.target.id === "modal-background") {
      e.preventDefault();
      setIsModalShown(false);
    }
  };
  return (
    isModalShown && (
      <div className={modal} id="modal-background" onClick={clickOffModal}>
        <div className={modalContent}>
          {/* Title */}
          <p className={modalTitle}>{recipeInfo.title}</p>
          <img
            className={modalImage}
            src={recipeInfo.image}
            alt={recipeInfo.title}
          />
          {/* Three Stats */}
          <div className={modalStats}>
            <div className={modalStatsItem} style={{ width: "200px" }}>
              <FontAwesomeIcon icon={faUtensils} />
              <p>{recipeInfo.servings} Servings</p>
            </div>
            <div className={modalStatsItem} style={{ width: "160px" }}>
              <FontAwesomeIcon icon={faClock} />
              <p>{recipeInfo.readyInMinutes} mins</p>
            </div>
            <div className={modalStatsItem} style={{ width: "75px" }}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <p>{recipeInfo.aggregateLikes}</p>
            </div>
          </div>
          {/* Ingredients List */}
          <div className={modalRecipeContainer}>
            <span className={modalRecipeTag}>Ingredients:</span>
            <ul className={modalIngredientsList}>
              {recipeInfo.extendedIngredients?.map((ingredient) => (
                <li key={ingredient.id} className={modalIngredientItem}>
                  {ingredient.original}
                </li>
              ))}
            </ul>
          </div>
          {/* Recipe Steps */}
          <div className={modalRecipeContainer}>
            <span className={modalRecipeTag}>Steps:</span>
            <ul className={modalStepsList}>
              {recipeInfo.analyzedInstructions[0].steps.map((step, stepIdx) => (
                <li key={stepIdx} className={modalStepItem}>
                  {step.step}
                </li>
              ))}
            </ul>
          </div>
          {/* Close Modal Button */}
          <button
            className={closeButton}
            onClick={() => {
              setIsModalShown(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </div>
    )
  );
};

export default RecipeModal;
