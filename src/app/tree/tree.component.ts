import { Component, OnInit } from '@angular/core';


declare let mxClient;
declare let mxUtils;
declare let mxEvent;
declare let mxGraph;
declare let mxRubberband;
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  var container = document.getElementById('mxgraph');
  this.main(container);
  }
    
  main(container)
		{
			// Checks if the browser is supported
			if (!mxClient.isBrowserSupported())
			{
				// Displays an error message if the browser is not supported.
				mxUtils.error('Browser is not supported!', 200, false);
			}
			else
			{
				// Disables the built-in context menu
				mxEvent.disableContextMenu(container);
				
				// Creates the graph inside the given container
				var graph = new mxGraph(container);

				// Enables rubberband selection
				new mxRubberband(graph);
				
				// Gets the default parent for inserting new cells. This
				// is normally the first child of the root (ie. layer 0).
				var parent = graph.getDefaultParent();
								
				// Adds cells to the model in a single step
				graph.getModel().beginUpdate();
				try
				{
					var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
					var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
					var e1 = graph.insertEdge(parent, null, '', v1, v2);
				}
				finally
				{
					// Updates the display
					graph.getModel().endUpdate();
				}
			}
    };
    

  }