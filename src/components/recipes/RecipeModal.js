import React from "react";
import RecipeSaveBtn from "./RecipeSaveBtn";
import IngredientText from "./IngredientText";

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
  modalStepsList,
  modalStepItem,
} = styles;

const RecipeModal = ({ isModalShown, setIsModalShown, recipeInfo }) => {
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
          <div className={modalTitle}>
            <RecipeSaveBtn recipe={recipeInfo} />
            <p>{recipeInfo.title}</p>
          </div>
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
              {!recipeInfo.extendedIngredients
                ? "No ingredients found"
                : recipeInfo.extendedIngredients?.map((ingredient) => (
                    <IngredientText
                      key={`${ingredient.id} ${ingredient.original}`}
                      ingredientID={ingredient.id}
                    >
                      {ingredient.original}
                    </IngredientText>
                  ))}
            </ul>
          </div>
          {/* Recipe Steps */}
          <div className={modalRecipeContainer}>
            <span className={modalRecipeTag}>Steps:</span>
            <ul className={modalStepsList}>
              {recipeInfo.analyzedInstructions?.length === 0
                ? "No steps found"
                : recipeInfo.analyzedInstructions[0].steps.map(
                    (step, stepIdx) => (
                      <li key={stepIdx} className={modalStepItem}>
                        {step.step}
                      </li>
                    )
                  )}
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
