const express = require('express');
const app = express();
app.use(express.json());

const db = require("./config.js");

const { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc } = require('firebase/firestore');

const cors = require('cors');
app.use(cors());

//IMPORTANCE: set collection name
var collectionName = "cities";

//READ COLLECTION
app.get('/', async (req, res) => {
   try {
      const collectionRefs = collection(db, collectionName);
      const collectionSnap = await getDocs(collectionRefs);
      const collectionList = collectionSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).send(collectionList);
      res.render('index', { collectionList})
   } catch (error) {
      console.error(error);
      res.status(500).send("Error loading collection: " + error.message);
   }
});

//READ DOCUMENT
app.get('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const documentRefs = doc(db, collectionName, id);
      const documentSnap = await getDoc(documentRefs);
      if (documentSnap.exists()) {
         const documentData = documentSnap.data();
         res.status(200).send(documentData);
      } else {
         res.status(404).send("Document not found !");
      }
   } catch (error) {
      console.error("An error occurred:", error);
      res.status(500).send("Error loading document: " + error.message);
   }
});

//CREATE DOCUMENT
app.post('/', async (req, res) => {
   try {
      const newDoc = req.body;
      const newDocRefs = doc(collection(db, collectionName));
      await setDoc(newDocRefs, newDoc);
      res.status(201).send("Create document succeed !");
   } catch (error) {
      console.error(error);
      res.status(400).send("Error creating document: " + error.message);
   }
});

//UPDATE DOCUMENT
app.put('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const updatedData = req.body;
      const docRefs = doc(db, collectionName, id);
      await updateDoc(docRefs, updatedData);
      res.status(200).send('Update document succeed !');
   } catch (error) {
      console.error(error);
      res.status(400).send("Error updating document: " + error.message);
   }
});

//DELETE DOCUMENT
app.delete('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const docRefs = doc(db, collectionName, id);
      await deleteDoc(docRefs);
      res.status(200).send("Delete document succeed !");
   } catch (error) {
      console.error(error);
      res.status(400).send("Error deleting document: " + error.message);
   }
});

//listen port
app.listen(process.env.PORT || 3001)