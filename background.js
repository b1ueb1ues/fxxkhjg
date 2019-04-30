// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
//chrome.tabs.onAttached.addListener(function(tab){
//  somecode = {code : 'alert("attach")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//
//chrome.tabs.onUpdated.addListener(function(id,changeInfo,tab){
//  somecode = {code : 'alert("updated")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//chrome.tabs.onCreated.addListener(function(id,changeInfo,tab){
//  somecode = {code : 'alert("created")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//chrome.tabs.onMoved.addListener(function(id,changeInfo,tab){
//  somecode = {code : 'alert("moved")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//chrome.tabs.onSelectionChanged.addListener(function(id,changeInfo,tab){
//  somecode = {code : 'alert("selectionchange")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//chrome.tabs.onActivated.addListener(function(id,changeInfo,tab){
//  somecode = {code : 'alert("Activated")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//chrome.tabs.onHighlighted.addListener(function(id,changeInfo,tab){
//  somecode = {code : 'alert("highlight")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//chrome.tabs.onReplaced.addListener(function(id,changeInfo,tab){
//  somecode = {code : 'alert("replaced")'};
//  chrome.tabs.executeScript(somecode);
//});
//
//




// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!

  chrome.tabs.executeScript({file:"jquery-2.1.4.js"});

  chrome.tabs.executeScript({file:"main.js"});
  //
  //chrome.tabs.executeScript({file:"test.js"});
  //chrome.tabs.executeScript({file:"diffprev.js"});

  chrome.tabs.executeScript({file:"rabbitflag.js"});

});
