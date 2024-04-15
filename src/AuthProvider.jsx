import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./Components/firebase.config";

export const AuthContext = createContext(null);

// social auth providers

const twitterProvider = new TwitterAuthProvider();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        handleAuthError(error);
        throw error;
      });
  };

  // Sign in User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        handleAuthError(error);
        throw error;
      });
  };

//   google login

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)

  }

  // facebook login

  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider)
  }

  // Twitter login

  const twitterLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider)
  }


//   log Out User

  const logOutUser =() => {
   return signOut(auth)
     .then(() => {
        setUser(null);
      })
  }

  // Observer
  useEffect(() => {
    const unSubscribeUser = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
      }
    });

    return () => {
      unSubscribeUser();
    };
  }, []);

  const handleAuthError = (error) => {
    console.error("Authentication Error:", error);
  };

  const contextValue = { user, createUser, signInUser , logOutUser , googleLogin , facebookLogin , twitterLogin , loading};

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
